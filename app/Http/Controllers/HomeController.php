<?php

namespace App\Http\Controllers;

use App\Models\Satwa;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('home/index');
    }

    public function daftarSatwa(Request $request)
    {
        $query = Satwa::with(['jenis_satwa', 'kategori_satwa', 'rekam_medis'])->latest();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('nama', 'LIKE', "%$search%")
                    ->orWhere('jenis_kelamin', 'LIKE', "%$search%")
                    ->orWhere('tanggal_lahir', 'LIKE', "%$search%")
                    ->orWhere('bangsa', 'LIKE', "%$search%")
                    ->orWhere(function ($subquery) use ($search) {
                        $subquery->whereHas('jenis_satwa', function ($query) use ($search) {
                            $query->where('nama_jenis_satwa', 'LIKE', '%' . $search . '%');
                        })->orWhereHas('kategori_satwa', function ($query) use ($search) {
                            $query->where('nama_kategori_satwa', 'LIKE', '%' . $search . '%');
                        });
                    });
            });
        }

        $daftarSatwa = $query->paginate($request->perpage ?? 12)->withQueryString();
        return Inertia::render('daftar-satwa/index', compact('daftarSatwa'));
    }

    public function detailSatwa($id)
    {
        $satwa = Satwa::with(['kategori_satwa', 'jenis_satwa', 'rekam_medis.obat'])->findOrFail($id);

        return Inertia::render('daftar-satwa/show', compact('satwa'));
    }
}
