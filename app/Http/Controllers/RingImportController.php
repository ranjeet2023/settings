<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\RingImport;
use App\Models\RingData;
use App\Imports\Excelfileimport;

class RingImportController extends Controller
{
    //
    public function excelFile()
    {
       return view('welcome');
    }

    /**
    * @return \Illuminate\Support\Collection
    */
    public function fileImport(Request $request)
    {

        Excel::import(new RingImport, $request->file('file')->store('files'));
        return redirect()->back()->with('success','data inserted successfully');
    }

    public function getExcelFileImport() {
           return view('excelfile');
    }

    public function ExcelFileImport(Request $request)
    {

        Excel::import(new Excelfileimport, $request->file('file')->store('files'));
        return redirect()->back()->with('success','data inserted successfully');
    }
}
