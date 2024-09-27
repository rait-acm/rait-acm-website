import React from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  label: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ label, link }) => {
  return (
    <Link
      to={link}
      className="bg-[#1f2937] text-white py-2 px-4 rounded inline-block"
    >
      {label}
    </Link>
  );
};

const ButtonContainer: React.FC = () => {
  const buttons = [
    { label: "2024-25", link: "/team" },
    { label: "2023-24", link: "/team-2023-24" },
    { label: "2022-23", link: "/team-2022-23" },
    { label: "2021-22", link: "/team-2021-22" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {buttons.map((button, index) => (
        <Button key={index} label={button.label} link={button.link} />
      ))}
    </div>
  );
};

export default ButtonContainer;
