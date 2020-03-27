<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class NotificationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return[
            'id' => $this->id,
            'replied_by' => $this->data['replied_by'],
            'replied_by_id' => $this->data['replied_by_id'],
            'question' => $this->data['question'],
            'slug' => $this->data['slug'],
        ];
    }
}
