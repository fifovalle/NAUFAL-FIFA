import { useState, useEffect } from "react";
import { db, collection, getDocs } from "@/lib/firebaseConfig";

const useTampilkanTestimoni = () => {
  const [testimoni, setTestimoni] = useState([]);

  useEffect(() => {
    const ambilTestimoni = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Testimoni"));
        const dataTestimoni = [];

        querySnapshot.forEach((docSnapshot) => {
          dataTestimoni.push({
            id: docSnapshot.id,
            ...docSnapshot.data(),
          });
        });

        setTestimoni(dataTestimoni);
      } catch (error) {
        console.error(
          "Terjadi kesalahan saat mengambil data testimoni:",
          error
        );
      } finally {
      }
    };

    ambilTestimoni();
  }, []);

  return { testimoni };
};

export default useTampilkanTestimoni;
