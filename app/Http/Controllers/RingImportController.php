<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\RingData;
use App\Imports\GhImport;
use App\Imports\OverNightImport;

class RingImportController extends Controller
{
    //
    public function excelFile()
    {
       return view('overnightmounting');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function fileImport(Request $request)
    {

        Excel::import(new OverNightImport, $request->file('file')->store('files'));
        return redirect()->back()->with('success','data inserted successfully');
    }

    public function getExcelFileImport() {
           return view('ghfileimport');
    }

    public function ExcelFileImport(Request $request)
    {

        Excel::import(new GhImport, $request->file('file')->store('files'));
        return redirect()->back()->with('success','data inserted successfully');
    }
}
