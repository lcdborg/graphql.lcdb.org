<?php

declare(strict_types=1);

use App\Http\Controllers\GraphQLController;
use Illuminate\Support\Facades\Route;

// Open API endpoint for GraphQL
Route::post('/', GraphQLController::class)
    ->name('graphql');

// APIKey secured endpoint for GraphQL
Route::middleware('auth.apikey')
    ->post('/apikey', GraphQLController::class)
    ->name('graphql-apikey');

Route::get('/api/source/{id}/download', \App\Http\Controllers\Api\SourceDownloadAllController::class)
    ->name('source.download.all.get');

Route::get('/api/source/{id}/textdoc/download', \App\Http\Controllers\Api\SourceDownloadTextdocController::class)
    ->name('source.download.textdoc.get');

Route::get('/api/checksum/{id}/download', \App\Http\Controllers\Api\ChecksumDownloadController::class)
    ->name('checksum.download.get');

Route::get('/api/file/{id}/download', \App\Http\Controllers\Api\FileDownloadController::class)
    ->name('file.download.get');

Route::get('/api/identifier/{id}/download', \App\Http\Controllers\Api\IdentifierDownloadAllController::class)
    ->name('identifier.download.all.get');
