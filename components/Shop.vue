<template>
<div>
    <div class=" min-h-screen  flex items-center justify-center  bg-gradient-to-r from-purple-300 to-purple-200  items-center ">
            <div class="pl-20 -mt-96" v-for="(item ,i) in data" :key="i">
                <div class="relative px-4 py-10 bg-white shadow-xl sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div class="pb-5">
                            <i class="em em-part_alternation_mark" aria-role="presentation" aria-label="PART ALTERNATION MARK"></i><span class="pl-4 text-2xl font-semibold">Shop[{{item.shop}}]</span>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-5">
                            <i class="em em-scroll" aria-role="presentation" aria-label="SCROLL"></i><span class="pl-4 text-lg text-gray-500 font-semibold">Order: {{item.id}}</span>
                        </div>
                        <div>
                            <i class="em em-poultry_leg" aria-role="presentation" aria-label="POULTRY LEG"></i>   <span class="pl-4 text-lg text-gray-500 font-semibold">name: {{item.name}}</span>
                        </div>
                        <div>
                           <i class="em em-money_with_wings" aria-role="presentation" aria-label="MONEY WITH WINGS"></i>   <span class="pl-4 text-lg text-gray-500 font-semibold">price: {{item.price}}</span>
                        </div>
                        <div>
                            <i class="em em-shopping_trolley" aria-role="presentation" aria-label="SHOPPING TROLLEY"></i>   <span class="pl-4 text-lg text-gray-500 font-semibold">amount: {{item.order.amount}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                    "id": 1,
                    "image": "https://source.unsplash.com/100x100?food",
                    "name": "ทาโกะยากิ",
                    "description": "จำนวน 5 ลูก",
                    "price": 69,
                    "addon": [],
                    "order": {
                        "remark": "",
                        "condition": "นำสินค้าออกจากออเดอร์ของฉัน",
                        "amount": 3
                    },
                    "shop": 1
                },
                {
                    "id": 2,
                    "image": "https://source.unsplash.com/120x120?food",
                    "name": "ถั่วทอด",
                    "description": "ปริมาณ 200 กรัม",
                    "price": 69,
                    "addon": [],
                    "order": {
                        "remark": "",
                        "condition": "นำสินค้าออกจากออเดอร์ของฉัน",
                        "amount": 1
                    },
                    "shop": 1
                },
                {
                    "id": 3,
                    "image": "",
                    "name": "ปีกไก่ทอดน้ำปลา",
                    "description": "จำนวน 5 ชิ้น",
                    "price": 69,
                    "addon": [],
                    "order": {
                        "remark": "",
                        "condition": "นำสินค้าออกจากออเดอร์ของฉัน",
                        "amount": 1
                    },
                    "shop": 1
                },
                {
                    "id": 4,
                    "image": "",
                    "name": "เฟรซ์ฟราย",
                    "description": "ปริมาณ 200 กรัม",
                    "price": 59,
                    "addon": [],
                    "order": {
                        "remark": "",
                        "condition": "นำสินค้าออกจากออเดอร์ของฉัน",
                        "amount": 1
                    },
                    "shop": 1
                }
            ]
        }
    },
}
</script>
