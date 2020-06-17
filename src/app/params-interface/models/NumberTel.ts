export interface NumberTel {

page: number;
page_count: number;
page_size: number;
total_items: number;
_embedded: _embedded; 

}

interface _embedded{

 numbers: numbers ;

}

interface numbers{

    name: string;
    number: number;
    type: string;
    setting?: object;
   
}