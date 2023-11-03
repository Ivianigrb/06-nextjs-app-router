import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title : 'Sepatu Baru',
        price : 100000,
        image : "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_383,c_limit/090fd678-b38d-4f5b-b3d6-b6900116865b/waffle-debut-shoes-hbBJtw.png"
    },

    {
        id: 2,
        title : 'Sendal Baru',
        price : 3400000,
        image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6760d20e-f7a4-4e08-acae-0ec877ed54f0/air-max-koko-sandal-ktWc9N.png"
    },
    
    {
        id: 3,
        title : 'Baju Baru',
        price : 1000000,
        image : "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/956af82e-2ba7-4d09-be67-98396fe6b9ec/sportswear-tech-fleece-oversized-hoodie-lXSN5t.png"
    }
];

//klo untuk api dia menggunakan async
export async function GET(request: NextRequest){
    const {searchParams} = new URL (request.url);
    const id = searchParams.get("id");
    if (id){
        const detailProduct = data.find((item) => item.id === Number(id));
        if(detailProduct){
            return NextResponse.json({
                status: 200, 
                message: "Succes", 
                data: detailProduct 
            });
        }
        return NextResponse.json({
            status: 404, 
            message: "Not Found", 
            data: {}
        });
    }
   
    
    return NextResponse.json({status: 200, message: "Succes", data });
}