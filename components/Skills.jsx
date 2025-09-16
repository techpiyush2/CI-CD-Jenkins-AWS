import React from 'react';
import Image from 'next/image';

// Image Imports
import HTML from '@/public/html.png'
import CSS from '@/public/css.png'
import Javascript from '@/public/javascript.png'
import PHP from '@/public/php.png'
import ReactImg from '@/public/react.png'
import Tailwind from '@/public/tailwind.png'
import GIT from '@/public/git.png'
import Wordpress from '@/public/wordpress.png'

const Skills = () => {
    return (
        <section id="skills" className="my-20 scroll-mt-32">
            <div className="container mx-auto px-10 lg:px-20">
                <h2 className="text-4xl font-bold mb-16 text-center text-[#3A51ED]">Skills</h2>
                <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-20">
                    <Image src={HTML} alt="HTML" width={80} height={80}/>
                    <Image src={CSS} alt="CSS" width={80} height={80}/>
                    <Image src={Javascript} alt="JavaScript" width={80} height={80}/>
                    <Image src={ReactImg} alt="React" width={80} height={80}/>
                    <Image src={Tailwind} alt="Tailwind" width={80} height={80}/>
                    <Image src={GIT} alt="GIT" width={80} height={80}/>
                    <Image src={PHP} alt="PHP" width={80} height={80}/>
                    <Image src={Wordpress} alt="WordPress" width={80} height={80}/>
                </div>
            </div>
        </section>
    );
};

export default Skills;
