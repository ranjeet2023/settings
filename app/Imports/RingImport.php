<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\RingData;
use Maatwebsite\Excel\Concerns\ToCollection;

class RingImport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
    {

        foreach ($rows as $row) {


            $categories = explode('/', explode(',', $row['categories'])[0]) + [null, null, null];
            [$categories, $subcategory, $diamond_type] = array_slice($categories, 0, 3);

            RingData::updateOrCreate(
                ['sku' =>  $row['sku'] ?? $row['item'] ?? null ],
            [
                'base_sku'=>$row['base_sku'] ?? "",
                'category'=>$categories ?? "",
                'sub_category'=>$subcategory ?? "",
                'product_name'=>$row['product_name'] ?? "",
                'product_description'=>$row['product_description'] ??  "",
                'design_name'=>$row['design_name'] ?? "",
                'metal_name'=> $row['metal_name'] ?? $row['default_metal'] ?? "",
                'base_price'=> $row['base_price'] ?? "",
                'additional_metal_price'=> $row['additional_metal_price'] ?? "",
                'total_price'=> $row['total_price'] ?? "",
                'weight'=> $row['weight'] ?? $row['stone_breakdown'] ?? "",
                'status'=> $row['status'] ?? "",
                'qty'=> $row['qty'] ?? "",
                'main_image'=> $row['item'].'jpg',
                'diamond_can_be_matched_with'=> $diamond_type ?? "",
                'additional_image_1'=> $row['item'].'side.jpg',
                'additional_image_2'=> $row['item'].'set.jpg',
                'setting_width'=> $row['setting_width'] ?? "",
                'type'=> $row['type'] ?? "",
                'vendor'=> $row['vendor'] ?? "",
                'page_title'=> $row['page_title'] ?? ""
            ]
        );
      }
    }
}
