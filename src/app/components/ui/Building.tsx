import { FC } from "react";

const Building: FC<{}> = () => {
  return (
    <section style={{ margin: "20px 0", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ color: "accent" }}>En construcción...</h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-20 w-20"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#000000"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5.5713 14.5L9.46583 18.4141M18.9996 3.60975C17.4044 3.59505 16.6658 4.33233 16.4236 5.07743C16.2103 5.73354 16.4052 7.07735 15.896 8.0727C15.4091 9.02443 14.1204 9.5617 12.6571 9.60697M20 7.6104L20.01 7.61049M19 15.96L19.01 15.9601M7.00001 3.94926L7.01001 3.94936M19 11.1094C17.5 11.1094 16.5 11.6094 15.5949 12.5447M10.2377 7.18796C11 6.10991 11.5 5.10991 11.0082 3.52734M3.53577 20.4645L7.0713 9.85791L14.1424 16.929L3.53577 20.4645Z"
        />
      </svg>
    </section>
  );
};

export default Building;
