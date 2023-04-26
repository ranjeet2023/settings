<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Models\RingData;

class Excelfileimport implements ToCollection, WithHeadingRow
{
    /**
    * @param Collection $collection
    */
    public function collection(Collection $rows)
        {
            foreach ($rows as $row) {
                $diamond = [];
                $diamondOptions = [
                    'roundcompatible' => 1,
                    'princesscompatible' => 2,
                    'cushioncompatible' => 3,
                    'radiantcompatible' => 4,
                    'asschercompatible' => 5,
                    'emeraldcompatible' => 6,
                    'ovalcompatible' => 7,
                    'pearcompatible' => 8,
                    'marquisecompatible' => 9,
                    'heartcompatible' => 10
                ];
                foreach ($diamondOptions as $key => $value) {
                    if ($row[$key] == 'Y') {
                        array_push($diamond, $value);
                    }
                }
                RingData::updateOrCreate(
                    ['sku' => $row['id'] ?? $row['item'] ?? null],
                    [
                        'base_sku' => $row['bandcompatibleid'] ?? "",
                        'category' => $row['itemtype'] ?? "",
                        'sub_category' => $row['style'] ?? "",
                        'product_name' => $row['product_name'] ?? "",
                        'product_description' => $row['description'] ?? "",
                        'design_name' => $row['design_name'] ?? "",
                        'metal_name' => $row['metal'] ?? $row['default_metal'] ?? "",
                        'base_price' => $row['price'] ?? "",
                        'additional_metal_price' => $row['additional_metal_price'] ?? "",
                        'total_price' => $row['base_price'] ?? "",
                        'weight' => $row['weight'] ?? $row['metalweight'] ?? "",
                        'status' => $row['status'] ?? "1",
                        'qty' => $row['qty'] ?? "",
                        'main_image' => $row['imagesurl'] ?? "",
                        'diamond_can_be_matched_with' => implode(',', $diamond) ?? "",
                        'additional_image_1' => $row['RadiantImagesurlvalue'] ?? "",
                        'additional_image_2' => $row['emeraldimagesurlvalue'] ?? "",
                        'setting_width' => $row['setting_width'] ?? "",
                        'type' => $row['itemtype'],
                        'vendor' => 'GH',
                        'page_title' => $row['page_title'] ?? ""
                    ]
                );
            }
        }
}
