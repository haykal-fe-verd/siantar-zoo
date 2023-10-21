<?php

namespace App\Http\Controllers;

use App\Models\KategoriSatwa;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class KategoriSatwaController extends Controller
{
    public function index(Request $request): Response
    {
        $query = KategoriSatwa::latest();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('nama_kategori_satwa', 'LIKE', "%$search%");
            });
        }

        $kategoriSatwa = $query->paginate($request->perpage ?? 10)->withQueryString();
        return Inertia::render('kategori-satwa/index', compact('kategoriSatwa'));
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_kategori_satwa' => 'required',
        ]);

        $kategoriSatwa = new KategoriSatwa();

        $kategoriSatwa->nama_kategori_satwa = $request->input('nama_kategori_satwa');
        $kategoriSatwa->save();

        return redirect()->route('kategori-satwa.index')->with('success', 'Kategori Satwa berhasil ditambahkan');
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $request->validate([
            'nama_kategori_satwa' => 'required',
        ]);

        $kategoriSatwa = KategoriSatwa::findOrFail($id);
        $kategoriSatwa->nama_kategori_satwa = $request->nama_kategori_satwa;
        $kategoriSatwa->save();

        return redirect()->route('kategori-satwa.index')->with('success', 'Kategori Satwa berhasil diedit');
    }

    public function destroy(string $id): RedirectResponse
    {
        $kategoriSatwa = KategoriSatwa::findOrFail($id);
        $kategoriSatwa->delete();

        return redirect()->route('kategori-satwa.index')->with('success', 'Kategori Satwa berhasil dihapus');
    }
}
