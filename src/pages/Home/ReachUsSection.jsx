/* eslint-disable no-unused-vars */
import React from "react";
import { ArrowUpRight, Upload } from "lucide-react";

const ReachUsSection = () => {

    return (
        <section
            className="
            relative 
            w-full 
            bg-[#303030]
            py-10
            sm:py-12
            md:py-16
            px-5
            sm:px-8
            md:px-12
            xl:px-24
            "
            aria-labelledby="reach-us-heading"
        >


            {/* Header */}

            <header
                className="
                flex 
                flex-col 
                items-center 
                mb-10
                sm:mb-12
                md:mb-16
                "
            >


                <div className="relative inline-block text-center">


                    {/* Responsive Image */}

                    <img
                        src="/WhatsApp Image 2026-06-08 at 16.26.25.jpeg"
                        alt="Reach Us Banner"
                        className="
                        w-40
                        h-40
                        sm:w-52
                        sm:h-52
                        md:w-64
                        md:h-64
                        lg:w-72
                        lg:h-72
                        object-contain
                        mb-4
                        mx-auto
                        "
                    />



                    <h2
                        id="reach-us-heading"
                        className="
                        text-3xl
                        sm:text-4xl
                        md:text-5xl
                        font-extrabold
                        tracking-wide
                        uppercase
                        text-[#e0e0e0]
                        "
                    >
                        REACH US
                    </h2>


                    <div
                        className="
                        w-24
                        h-1
                        bg-[#a08552]
                        absolute
                        -bottom-4
                        left-1/2
                        -translate-x-1/2
                        "
                    ></div>


                </div>

            </header>






            {/* CONTENT */}

            <div
                className="
                max-w-7xl
                mx-auto
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:gap-12
                items-start
                "
            >




                {/* LEFT */}

                <div
                    className="
                    w-full
                    lg:w-5/12
                    "
                >

                    <div
                        className="
                        rounded-[30px]
                        p-5
                        sm:p-8
                        md:p-12
                        "
                    >

                        <div
                            className="
                            space-y-5
                            text-[#e0e0e0]
                            text-[14px]
                            sm:text-[15px]
                            md:text-[18px]
                            lg:text-[20px]
                            leading-[1.6]
                            font-light
                            text-justify
                            "
                        >

                            <p>

                                Thank you for reaching out to Vedanta Legal Associates.

                                Please fill the form below with your full details and a clear description of your query.
                                This will help us understand your requirements properly.

                                Our team will review your submission carefully and get in touch with you at the earliest.
                                We are committed to responding to all genuine enquiries as promptly as possible while
                                upholding the highest standards of professionalism and confidentiality.

                            </p>


                        </div>


                    </div>


                </div>







                {/* RIGHT FORM */}


                <div
                    className="
                    w-full
                    lg:w-7/12
                    "
                >


                    <div
                        className="
                        rounded-[30px]
                        p-5
                        sm:p-8
                        "
                    >


                        <form
                            className="
                            flex
                            flex-col
                            gap-4
                            "
                            encType="multipart/form-data"
                        >





                            {/* Name + Phone */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                                <InputField label="Full Name *"/>

                                <InputField label="Phone Number *"/>


                            </div>





                            {/* Whatsapp + Date */}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                                <InputField label="Whatsapp Number"/>

                                <InputField label="Date of Incident"/>


                            </div>







                            <InputField label="Address"/>


                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                <InputField label="Jurisdiction / Place of Incident"/>

                                <InputField label="Type of Incident"/>


                            </div>






                            {/* Matter */}

                            <div className="flex flex-col">

                                <label className="text-white font-bold text-sm mb-1">
                                    Describe Your Matter *
                                </label>


                                <textarea
                                    rows="2"
                                    className="
                                    w-full
                                    border
                                    rounded-xl
                                    border-gray-200
                                    bg-transparent
                                    p-2
                                    text-white
                                    outline-none
                                    resize-none
                                    "
                                />

                            </div>







                            {/* Upload */}


                            <div
                                className="
                                flex
                                flex-col
                                gap-4
                                p-4
                                rounded-2xl
                                border
                                border-gray-200
                                "
                            >


                                <UploadBox text="Attach ID Proof *"/>


                                <div className="h-px bg-gray-300"></div>


                                <UploadBox text="Attach Relevant Documents"/>


                            </div>







                            {/* Button */}

                            <button
                                className="
                                bg-[#a08552]
                                text-black
                                px-8
                                py-3
                                rounded-full
                                font-bold
                                uppercase
                                tracking-widest
                                flex
                                justify-center
                                items-center
                                gap-3
                                w-full
                                sm:w-fit
                                mx-auto
                                lg:mx-0
                                "
                            >

                                Submit Details

                                <ArrowUpRight size={18}/>


                            </button>



                        </form>


                    </div>


                </div>



            </div>



        </section>
    );
};





function InputField({label}) {

    return (

        <div className="flex flex-col">


            <label className="text-white font-bold text-sm mb-1">

                {label}

            </label>


            <input
                className="
                w-full
                bg-transparent
                border-b-2
                border-gray-200
                outline-none
                py-1
                text-white
                "
            />


        </div>

    );

}





function UploadBox({text}) {

    return (

        <label
            className="
            text-white
            font-bold
            text-sm
            flex
            items-center
            gap-2
            cursor-pointer
            "
        >

            <Upload
                size={16}
                className="text-[#a08552]"
            />


            {text}


            <input type="file" className="hidden"/>


        </label>

    );

}



export default ReachUsSection;