"use client";
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-xl text-blue-500 font-serif tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-cyan-200 sm:text-4xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                  <p className="text-lg sm:text-2xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                  <Link className="mt-3 text-blue-400 hover:text-blue-600" href={`/courses/${course.slug}`}>Learn More</Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}

          className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold text-teal-50 bg-gradient-to-tr from-teal-900/30 via-white-900/70 to-pink-900/30 ring-1 ring-white-900/20 rounded-full overflow-hidden hover:opacity-90 transition-opacity before:absolute before:top-4 before:left-1/2 before:-translate-x-1/2 before:w-[100px] before:h-[100px] before:rounded-full before:bg-gradient-to-b before:from-blue-50/10 before:blur-xl"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
