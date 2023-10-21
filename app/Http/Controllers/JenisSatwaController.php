<?php

namespace App\Http\Controllers;

use App\Models\JenisSatwa;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class JenisSatwaController extends Controller
{
    public function index(Request $request): Response
    {
        $query = JenisSatwa::latest();

        if ($request->has('search')) {
            $search = $request->search;
            $query->where(function ($query) use ($search) {
                $query->where('nama_jenis_satwa', 'LIKE', "%$search%");
            });
        }

        $jenisSatwa = $query->paginate($request->perpage ?? 10)->withQueryString();
        return Inertia::render('jenis-satwa/index', compact('jenisSatwa'));
    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'nama_jenis_satwa' => 'required',
        ]);

        $jenisSatwa = new JenisSatwa();

        $jenisSatwa->nama_jenis_satwa = $request->input('nama_jenis_satwa');
        $jenisSatwa->save();

        return redirect()->route('jenis-satwa.index')->with('success', 'Jenis Satwa berhasil ditambahkan');
    }

    public function update(Request $request, string $id): RedirectResponse
    {
        $request->validate([
            'nama_jenis_satwa' => 'required',

        ]);

        $jenisSatwa = JenisSatwa::findOrFail($id);
        $jenisSatwa->nama_jenis_satwa = $request->nama_jenis_satwa;
        $jenisSatwa->save();

        return redirect()->route('jenis-satwa.index')->with('success', 'Jenis Satwa berhasil diedit');
    }

    public function destroy(string $id): RedirectResponse
    {
        $jenisSatwa = JenisSatwa::findOrFail($id);
        $jenisSatwa->delete();

        return redirect()->route('jenis-satwa.index')->with('success', 'Jenis Satwa berhasil dihapus');
    }
}
