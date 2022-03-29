<?php

namespace App\Services;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadedService
{
    public function __construct(
    )
    {}

    public function getFile(UploadedFile $file): string
    {

         return $file->getPathname();
    }
}