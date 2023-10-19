<?php

namespace App\Http\Controllers;

use App\Models\Obat;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ObatController extends Controller
{
    public function index(Request $request): Response
    {
        $query = Obat::latest();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('nama_obat', 'LIKE', "%$search%")
                    ->orWhere('stok', 'LIKE', "%$search%");
            });
        }

        $obat = $query->paginate($request->perpage ?? 10)->withQueryString();
        return Inertia::render('obat/index', compact('obat'));
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_obat' => 'required',
            'stok' => 'required|integer',
        ]);

        $obat = new Obat();

        $obat->nama_obat = $request->input('nama_obat');
        $obat->stok = $request->input('stok');
        $obat->save();

        return redirect()->route('obat.index')->with('success', 'Obat berhasil ditambahkan');
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $request->validate([
            'nama_obat' => 'required',
            'stok' => 'integer',
        ]);

        $obat = Obat::findOrFail($id);
        $obat->nama_obat = $request->nama_obat;
        $obat->stok = $request->stok;
        $obat->save();

        return redirect()->route('obat.index')->with('success', 'Obat berhasil diedit');
    }

    public function destroy(string $id): RedirectResponse
    {
        $obat = Obat::findOrFail($id);
        $obat->delete();

        return redirect()->route('obat.index')->with('success', 'Obat berhasil dihapus');
    }
}
