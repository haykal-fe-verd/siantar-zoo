<?php

namespace App\Http\Controllers;

use App\Models\JenisSatwa;
use App\Models\KategoriSatwa;
use App\Models\Obat;
use App\Models\Satwa;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        $totalSatwa = Satwa::count();
        $totalObat = Obat::count();
        $totalKategori = KategoriSatwa::count();
        $totalJenis = JenisSatwa::count();
        return Inertia::render('dashboard/index', compact(
            'totalSatwa',
            'totalObat',
            'totalKategori',
            'totalJenis'
        ));
    }
}
