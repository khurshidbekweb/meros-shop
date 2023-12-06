import "./modal.css";

import { useState } from "react";

const data = [
  {
    id: 1,
    name: "Kiyimlar",
    subtitle: [
      {
        id: Math.random(),
        name: "Qishki kitimlar",
        subtitle: [
          {
            id: Math.random(),
            name: "Kurtka",
          },
          {
            id: Math.random(),
            name: "Sapok",
          },
        ],
      },
      {
        id: Math.random(),
        name: "Yozgi kiyim",
        subtitle: [
          {
            id: Math.random(),
            name: "Fudbolka",
          },
          {
            id: Math.random(),
            name: "Shortik",
          },
        ],
      }
    ],
    brend: [
      {
        logo: 'https://picsum.photos/id/110/60/60'        
      }
    ]
  },
  {
    id: 2,
    name: "aksesuvarlar",
    subtitle: [
      {
        id: Math.random(),
        name: "quloqchinlar",
        subtitle: [
          {
            id: Math.random(),
            name: "navushnik",
          },
          {
            id: Math.random(),
            name: "Airpods",
          },
        ],
      },
      {
        id: Math.random(),
        name: "Chehollar",
        subtitle: [
          {
            id: Math.random(),
            name: "iphone8",
          },
          {
            id: Math.random(),
            name: "A90",
          },
        ],
      },
    ],
    brend: [
      {
        logo: 'https://picsum.photos/id/211/60/60'        
      },
      {
        logo: 'https://picsum.photos/id/121/60/60'        
      },
      {
        logo: 'https://picsum.photos/id/311/60/60'        
      }
    ]
  },
  {
    id: 3,
    name: "Maishiy texnika",
    subtitle: [
      {
        id: Math.random(),
        name: "Go'zallik uchun texnika",
        subtitle: [
          {
            id: Math.random(),
            name: "Soch turmaklash",
          },
          {
            id: Math.random(),
            name: "Soch kesish",
          },
        ],
      },
      {
        id: Math.random(),
        name: "Oshxona buyumlari",
        subtitle: [
          {
            id: Math.random(),
            name: "GAz plita",
          },
          {
            id: Math.random(),
            name: "KIr moshina",
          },
        ],
      },
    ],
    brend: [
      {
        logo: 'https://picsum.photos/id/213/60/60'        
      }
    ]
  }
];

function Category() {
  const [subcategories, setSubcategories] = useState(null);
  const handleHover = (id) => {
    const categories = data.find((e) => e.id == id);
    setSubcategories(categories);
  };

  return (
    <div className="w-[100%] mx-auto transition-all duration-150 overflow-hidden">
      <div className="category-wrapper w-[1530px] flex items-start mx-auto bg-white">
        <ul className="w-[470px] h-[100%] pb-5 bg-[#F4F7F8]">
          {data?.length &&
            data.map((c) => {
              return (
                <li
                  key={c.id}
                  onMouseOver={() => handleHover(c.id)}
                  className="category w-[340px] ml-auto rounded-l-[5px] hover:bg-white hover:text-[#F5921C] p-2 px-7 font-bold text-[18px]"
                >
                  <a href="#" className="category--link">
                    {c.name}
                  </a>
                </li>
              );
            })}
        </ul>
        <div className="chald-category-wrap w-[1080px] p-3">
          <div className="w-[930px] flex items-start gap-[30px]">
            <div className="category-childs-in-category w-[65%] flex flex-wrap gap-6">
              <ul>
                {subcategories?.subtitle?.length &&
                  subcategories.subtitle .map((sub) => {
                    return (
                      <li key={sub.id}>
                        <h2 className="font-bold text-[21px]">{sub.name}</h2>
                        <ul>
                          {sub.subtitle?.length &&
                            sub.subtitle.map((e) => {
                              return <li key={e.id}>{e.name}</li>;
                            })}
                        </ul>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="category-chald-brends text-center w-[30%]">
              {subcategories?.brend?.length && subcategories?.brend.map((brend) => {
                return (
                  <img key={brend.id} height={60} src={brend.logo} alt="bernd" />                   
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
