import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import ProductCard from "./ProductCard";

const prodcutsData = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 24,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "9164035109868",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    description:
      "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    category: "beauty",
    price: 19.99,
    discountPercentage: 5.5,
    rating: 3.28,
    stock: 44,
    tags: ["beauty", "eyeshadow"],
    brand: "Glamour Beauty",
    sku: "MVCFH27F",
    weight: 3,
    dimensions: {
      width: 12.42,
      height: 8.63,
      depth: 29.13,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 2 weeks",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 4,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Liam Garcia",
        reviewerEmail: "liam.garcia@x.dummyjson.com",
      },
      {
        rating: 1,
        comment: "Very disappointed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nora Russell",
        reviewerEmail: "nora.russell@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Elena Baker",
        reviewerEmail: "elena.baker@x.dummyjson.com",
      },
    ],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 32,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "2817839095220",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    title: "Powder Canister",
    description:
      "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    category: "beauty",
    price: 14.99,
    discountPercentage: 18.14,
    rating: 3.82,
    stock: 59,
    tags: ["beauty", "face powder"],
    brand: "Velvet Touch",
    sku: "9EN8WLT2",
    weight: 8,
    dimensions: {
      width: 24.16,
      height: 10.7,
      depth: 11.07,
    },
    warrantyInformation: "2 year warranty",
    shippingInformation: "Ships in 1-2 business days",
    availabilityStatus: "In Stock",
    reviews: [
      {
        rating: 5,
        comment: "Very happy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Ethan Thompson",
        reviewerEmail: "ethan.thompson@x.dummyjson.com",
      },
      {
        rating: 4,
        comment: "Great value for money!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Levi Hicks",
        reviewerEmail: "levi.hicks@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Highly impressed!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Hazel Gardner",
        reviewerEmail: "hazel.gardner@x.dummyjson.com",
      },
    ],
    returnPolicy: "60 days return policy",
    minimumOrderQuantity: 25,
    meta: {
      createdAt: "2024-05-23T08:56:21.618Z",
      updatedAt: "2024-05-23T08:56:21.618Z",
      barcode: "0516267971277",
      qrCode: "https://assets.dummyjson.com/public/qr-code.png",
    },
    images: [
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
    ],
    thumbnail:
      "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log("data==>", products);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      //   console.log("Data====>" ,JSON.stringify(data))
      setProducts(data?.products); // Assuming API returns an array of products
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const itemData = [
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/limav/flat-gradient-social/256/Twitter-icon.png"
          }}
        />
      )
    },
    {
      icon: (
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://icons.iconarchive.com/icons/designbolts/free-instagram/256/Active-Instagram-1-icon.png"
          }}
        />
      )
    },
  ];

  const Item = ({ item }) => {
    return <View>{item.icon}</View>;
  };

  return (
    <View>
      <FlatList
        data={itemData}
        numColumns={4}
        renderItem={Item}
        keyExtractor={(item) => item.alt}
      />
    </View>
    // <View className="bg-gray-50 flex-row grid-cols-2 gap-3 px-3">

    //   {/* <View className="p-3 border border-gray-100 shadow bg-gray-100 w-fit">
    //     <Image
    //       source={{
    //         uri: "https://www.cnet.com/a/img/resize/a44f35b37510905b8d4ab6afe383fa2564119c97/hub/2021/01/07/3626616c-83af-4199-a029-76db418938f0/galaxy-z-flip-fold-samsung-product-promo-hoyle-2021.jpg?auto=webp&fit=crop&height=900&precrop=2751,2001,x249,y0&width=1200",
    //       }} // Assuming your product object has an 'image' property
    //       className="w-[165px] h-[165px] rounded-lg"
    //     />
    //     <Text className="text-base text-orange-600 font-bold">Rs.30/-</Text>
    //     <Text className="mt-1 text-base text-gray-800 font-bold">
    //       Golden Watch Mobile
    //     </Text>
    //     <Text className="mt-1 text-base text-gray-500">
    //       This is a awesome person, with 80 kilos of weight
    //     </Text>
    //     <TouchableOpacity className=" bg-orange-500 py-2 rounded-full mt-1">
    //       <Text className="text-white font-bold text-xl text-center">Details</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View className=" p-3 border border-gray-100 shadow bg-gray-100 w-fit">
    //     <Image
    //       source={{
    //         uri: "https://www.cnet.com/a/img/resize/a44f35b37510905b8d4ab6afe383fa2564119c97/hub/2021/01/07/3626616c-83af-4199-a029-76db418938f0/galaxy-z-flip-fold-samsung-product-promo-hoyle-2021.jpg?auto=webp&fit=crop&height=900&precrop=2751,2001,x249,y0&width=1200",
    //       }} // Assuming your product object has an 'image' property
    //       className="w-[165px] h-[165px] rounded-lg"
    //     />
    //     <Text>$ 30</Text>
    //   </View>
    //   <View className="p-3 border w-fit">
    //     <Image
    //       source={{
    //         uri: "https://www.cnet.com/a/img/resize/a44f35b37510905b8d4ab6afe383fa2564119c97/hub/2021/01/07/3626616c-83af-4199-a029-76db418938f0/galaxy-z-flip-fold-samsung-product-promo-hoyle-2021.jpg?auto=webp&fit=crop&height=900&precrop=2751,2001,x249,y0&width=1200",
    //       }} // Assuming your product object has an 'image' property
    //       className="w-[150px] h-[150px] rounded-lg"
    //     />
    //   </View> */}
    // </View>
  );
};


export default Products;
