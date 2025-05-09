"use client";

import { useHospital } from "@/app/provider/HospitalProvider";
import { AddHospitalModal } from "./_components/AddHospitalModal";
import { HospitalInfoBox } from "./_components/HospitalInfoBox";
import { AddCategoryModal } from "./_components/AddCategoryModal";
import { CategoryButton } from "./_components/CategoryButton";
import { usePetCategory } from "@/app/provider/PetCategoryProvider";
import { useState } from "react";

export default function AllHospitals() {
  const { hospitals } = useHospital();
  const { category } = usePetCategory();
  const [loading, setLoading] = useState();
  return (
    <div className="w-full flex flex-col gap-5 items-center justify-center">
      <div className=" flex flex-wrap gap-3 sticky top-[120px] z-50 bg-white p-5 w-[1200px]">
        <AddCategoryModal />
        {category.map((cat, index) => {
          return (
            <CategoryButton
              key={index}
              category={cat}
              setLoading={setLoading}
            />
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2 max-w-[1200px] p-5">
        <AddHospitalModal
          initialValues={{
            name: "",
            backgroundImage: "",
            about: "",
            phoneNumber: 0,
            workTime: "",
            avatarImage: ["", "", "", ""],
            category: [""],
            email: "",
            location: "",
          }}
          triggerName="add"
        />
        {!loading &&
          hospitals?.map((hospital, index) => {
            return <HospitalInfoBox key={index} hospital={hospital} />;
          })}
      </div>
    </div>
  );
}
