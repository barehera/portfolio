import React, { useEffect, useState } from "react";

const useMouseAnimation = () => {
  const [mouseDirectionX, setMouseDirectionX] = useState<string>("");
  const [mouseDirectionY, setMouseDirectionY] = useState<string>("");
  const [rotateDirection, setRotateDirection] = useState<string>("");

  let rotated = false;
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { movementX, movementY } = event;

      if (movementX < 0 && movementY < 0) {
        setMouseDirectionY(`lg:-translate-y-[40px]`);
        setMouseDirectionX(`lg:-translate-x-[40px] `);
      } else if (movementX > 0 && movementY < 0) {
        setMouseDirectionY(`lg:-translate-y-[40px] `);
        setMouseDirectionX(`lg:translate-x-[40px]`);
      } else if (movementX > 0 && movementY > 0) {
        setMouseDirectionY(`lg:translate-y-[40px]`);
        setMouseDirectionX(`lg:translate-x-[40px]`);
      } else if (movementX < 0 && movementY > 0) {
        setMouseDirectionY(`lg:translate-y-[40px] `);
        setMouseDirectionX(`lg:-translate-x-[40px] `);
      }
      if (rotated === false) {
        setRotateDirection((prev) =>
          prev === "lg:-rotate-12" ? "lg:rotate-12" : "lg:-rotate-12"
        );
        rotated = true;
        setTimeout(() => {
          rotated = false;
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { mouseDirectionX, mouseDirectionY, rotateDirection };
};

export default useMouseAnimation;
