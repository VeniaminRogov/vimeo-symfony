<?php

namespace App\Controller;

use App\FormType\UploadFormType;
use App\Services\UploadedService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Vimeo\Exceptions\VimeoUploadException;
use Vimeo\Vimeo;

class IndexController extends AbstractController
{

    public function __construct(
        private UploadedService $service
    )
    {
    }

    /**
     * @throws VimeoUploadException
     */
    #[Route('/', name: 'index')]
    public function index(Request $request): Response
    {
        $uploadForm = $this->createForm(UploadFormType::class);
        $uploadForm->handleRequest($request);
        $client = new Vimeo('user141709016', 'awsf','fcffdd050c829d80d7a042e055deb4ab');
        if ($uploadForm->isSubmitted())
        {
            $data = $uploadForm->get('file')->getData();
            $filePath = $this->service->getFile($data);
            $uri = $client->upload($filePath, array(
                'name' => 'myName',
                'description' => 'myDescription'
            ));

            $resp = $client->request($uri.'?fields=transcode.status');

//            dd($resp);

            if($resp['body']['transcode']['status'] === 'complete')
            {
                dump('Your video finished transcoding.');
            } elseif ($resp['body']['transcode']['status'] === 'in_progress')
            {
                dump('Your video is still transcoding.');
            } else
            {
                dump('Your video encountered an error during transcoding.');
            }
        }
        return $this->render('index.html.twig', [
            'upload_form' => $uploadForm->createView()
        ]);
    }
}