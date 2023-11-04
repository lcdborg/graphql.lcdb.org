<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/', 'GraphQLController@graphql')
    ->name('graphql.post');

Route::get('/api/source/{id}/download', 'Api\SourceDownloadAllController@download')
    ->name('source.download.all.get');

Route::get('/api/source/{id}/textdoc/download', 'Api\SourceDownloadTextdocController@download')
    ->name('source.download.textdoc.get');

Route::get('/api/checksum/{id}/download', 'Api\ChecksumDownloadController@download')
    ->name('checksum.download.get');

Route::get('/api/file/{id}/download', 'Api\FileDownloadController@download')
    ->name('file.download.get');

Route::get('/api/identifier/{id}/download', 'Api\IdentifierDownloadAllController@download')
    ->name('identifier.download.all.get');
