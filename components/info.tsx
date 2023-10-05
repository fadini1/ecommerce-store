'use client';

import { ShoppingCart } from "lucide-react";

import { Product } from "@/types";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-zinc-900">
        {data.name}
      </h1>

      <div className="mt-2 flex items-end justify-between">
        <p className="text-2xl text-zinc-900">
          <Currency 
            value={data?.price}
          />
        </p>
      </div>

      <hr className="my-4" />

      <div className="flex flex-col gap-y-2">
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">
            Size:
          </h3>

          <div className="flex gap-2">
            <div>
              {data?.size?.name}
            </div>

            <div>
              {data?.size?.value}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">
            Color:
          </h3>

          <div 
            className="h-6 w-6 rounded-full border border-zinc-500"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-x-2">
        <Button className="flex items-center gap-x-2">
          Add to Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  )
}

export default Info;