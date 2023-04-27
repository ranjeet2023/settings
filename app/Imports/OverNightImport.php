<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\RingData;
use Maatwebsite\Excel\Concerns\ToCollection;

class OverNightImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {

        foreach ($rows as $row) {


            $categories = explode('/', explode(',', $row['categories'])[0]) + [null, null, null];
            [$categories, $subcategory, $diamond] = array_slice($categories, 0, 3);

            $diamonds=array("",1=>"Round",2=>"Princess",3=>"Cushion",4=>"Radiant",5=>"Asscher",6=>"Emerald",7=>"Oval",8=>"Pear",9=>"Marquise",10=>"Heart",11=>"Square");
            $diamond_type =array_search($diamond,$diamonds);

            RingData::updateOrCreate(
                ['sku' =>  $row['base_sku'] ?? $row['item'] ?? null ],
            [
                'base_sku'=>$row['item'],
                'category'=>$categories ?? "",
                'sub_category'=>$subcategory ?? "",
                'product_name'=>$categories." ,".$diamond_type,
                'product_description'=>$row['default_metal']." ,".$categories." ,".$diamond_type,
                'design_name'=>$row['design_name'] ?? "",
                'metal_name'=> $row['metal_name'] ?? $row['default_metal'] ?? "",
                'base_price'=> $row['base_price'] ?? "",
                'additional_metal_price'=> $row['additional_metal_price'] ?? "",
                'total_price'=> $row['total_price'] ?? "",
                'weight'=> $row['weight'] ?? $row['stone_breakdown'] ?? "",
                'status'=> $row['status'] ?? "",
                'qty'=> 10,
                'main_image'=> $row['item'].'jpg',
                'diamond_can_be_matched_with'=> $diamond_type ?? " ",
                'additional_image_1'=> $row['item'].'side.jpg',
                'additional_image_2'=> $row['item'].'set.jpg',
                'setting_width'=> $row['setting_width'] ?? "",
                'type'=> $categories,
                'vendor'=> 'overnightmounting',
                'page_title'=>$row['default_metal']." ,".$categories." ,".$diamond_type
            ]
        );
      }
    }
}
