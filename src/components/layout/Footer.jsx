/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden">

      <div className="absolute inset-0 bg-white pointer-events-none"></div>


      <div
        className="
        relative 
        z-10 
        w-full 
        max-w-[1400px] 
        mx-auto 
        px-5 
        sm:px-8 
        md:px-12 
        lg:px-16 
        xl:px-24
        pt-12
        md:pt-16
        "
      >


        {/* TOP SECTION */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          md:gap-12
          "
        >



          {/* LOGO */}

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">


            <div className="flex items-center gap-3 mb-8">


              <div className="w-11 h-11 rounded-full overflow-hidden">

                <img
                  src="/favicon.svg"
                  alt="Vedanta Logo"
                  className="w-full h-full object-contain"
                />

              </div>


              <h2 className="text-black text-xl md:text-2xl font-bold">
                VEDANTA
              </h2>


            </div>





            <h4 className="text-black text-sm mb-4">
              Subscribe to Newsletter
            </h4>




            <div
              className="
              w-full
              max-w-[320px]
              flex
              items-center
              border
              border-gray-500
              rounded-full
              overflow-hidden
              "
            >

              <input
                type="email"
                placeholder="Email Address"
                className="
                flex-1
                min-w-0
                px-4
                py-2
                text-sm
                outline-none
                text-black
                "
              />


              <button
                className="
                bg-black
                text-white
                px-5
                py-2
                text-xs
                sm:text-sm
                rounded-full
                "
              >
                Submit
              </button>


            </div>




            <div
              className="
              flex
              justify-center
              sm:justify-start
              gap-3
              mt-8
              "
            >


              {[FaXTwitter, FaFacebookF, FaInstagram, FaLinkedinIn].map(
                (Icon, i) => (

                  <a
                    key={i}
                    href="#"
                    className="
                    bg-black
                    text-white
                    p-2
                    rounded
                    "
                  >

                    <Icon size={15}/>

                  </a>

                )
              )}


            </div>


          </div>







          {/* COLUMNS */}


          {[
            {
              title:"Legal",
              items:[
                "Consumer Protection Law",
                "Constitutional Law & Public Interest Litigation (PIL)",
                "Family & Matrimonial Law",
                "Taxation & GST"
              ]
            },

            {
              title:"Practice",
              items:[
                "Civil Litigation & Dispute Resolution",
                "Criminal Litigation & Defense",
                "Real Estate & Property Law"
              ]
            },

            {
              title:"Work",
              items:[
                "Intellectual Property Rights",
                "Banking, Finance & Recovery",
                "Cyber Crime & Technology Law"
              ]
            }

          ].map((section,index)=>(


            <div
              key={index}
              className="text-center sm:text-left"
            >

              <h3 className="text-black text-lg md:text-xl mb-5">
                {section.title}
              </h3>


              <ul
                className="
                space-y-4
                text-sm
                text-black
                font-light
                "
              >

                {section.items.map((item,i)=>(

                  <li key={i}>
                    {item}
                  </li>

                ))}


              </ul>


            </div>


          ))}


        </div>








        {/* BIG TEXT */}


        <div
          className="
          flex
          justify-center
          items-end
          overflow-hidden
          h-28
          sm:h-40
          md:h-60
          lg:h-72
          "
        >

          <h1
            className="
            text-[24vw]
            sm:text-[18vw]
            md:text-[15vw]
            lg:text-[200px]
            leading-none
            tracking-tighter
            font-normal
            text-transparent
            bg-clip-text
            "
            style={{
              backgroundImage:
              "linear-gradient(to bottom,#d4d4d4,#777,white)"
            }}
          >

            VEDANTA

          </h1>


        </div>







        {/* BOTTOM BAR */}


        <div
          className="
          border-t
          border-gray-300
          py-6
          flex
          flex-col
          sm:flex-row
          justify-between
          items-center
          gap-4
          text-xs
          text-gray-500
          text-center
          "
        >


          <p>
            © 2026 Vedanta. All rights reserved.
          </p>



          <div className="flex items-center gap-2">


            <p>
              Built With Love By
              <span className="font-bold text-black ml-1">
                Createdge
              </span>
            </p>


            <Heart
              size={14}
              className="text-red-500 fill-red-500"
            />


          </div>



        </div>


      </div>


    </footer>
  );
}