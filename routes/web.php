<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\JenisSatwaController;
use App\Http\Controllers\KategoriSatwaController;
use App\Http\Controllers\ObatController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SatwaController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/daftar-satwa', [HomeController::class, 'daftarSatwa'])->name('daftar-satwa.index');
Route::get('/daftar-satwa/{id}', [HomeController::class, 'detailSatwa'])->name('daftar-satwa.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    //! dashboard
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    //! obat
    Route::get('/obat', [ObatController::class, 'index'])->name('obat.index');
    Route::post('/obat', [ObatController::class, 'store'])->name('obat.store');
    Route::put('/obat/{id}', [ObatController::class, 'update'])->name('obat.update');
    Route::delete('/obat/{id}', [ObatController::class, 'destroy'])->name('obat.destroy');

    //! jenis satwa
    Route::get('/jenis-satwa', [JenisSatwaController::class, 'index'])->name('jenis-satwa.index');
    Route::post('/jenis-satwa', [JenisSatwaController::class, 'store'])->name('jenis-satwa.store');
    Route::put('/jenis/{id}', [JenisSatwaController::class, 'update'])->name('jenis-satwa.update');
    Route::delete('/jenis-satwa/{id}', [JenisSatwaController::class, 'destroy'])->name('jenis-satwa.destroy');

    //! kategori-satwa
    Route::get('/kategori-satwa', [KategoriSatwaController::class, 'index'])->name('kategori-satwa.index');
    Route::post('/kategori-satwa', [KategoriSatwaController::class, 'store'])->name('kategori-satwa.store');
    Route::put('/kategori-satwa/{id}', [KategoriSatwaController::class, 'update'])->name('kategori-satwa.update');
    Route::delete('/kategori-satwa/{id}', [KategoriSatwaController::class, 'destroy'])->name('kategori-satwa.destroy');

    //! satwa
    Route::get('/satwa', [SatwaController::class, 'index'])->name('satwa.index');
    Route::post('/satwa', [SatwaController::class, 'store'])->name('satwa.store');
    Route::post('/satwa/{id}', [SatwaController::class, 'update'])->name('satwa.update');
    Route::delete('/satwa/{id}', [SatwaController::class, 'destroy'])->name('satwa.destroy');
});

require __DIR__ . '/auth.php';
