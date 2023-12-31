'use client'
import WorkCards from '@/app/components/WorkCards';
import { Project } from '../utils/interfaces';


type Props = {
  projects: Project[];
};

const Work = () => {
  const projects: Project[] = [
    {
      _id: '0',
      title: 'SKU',
      _type: "project",
      image: { name: 'moi', path: 'https://images.unsplash.com/photo-1693802742032-0c0fed0c6626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3374&q=80' },
      linkToBuild: 'https://images.unsplash.com/photo-1693802742032-0c0fed0c6626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3374&q=80',
      summary: "pics of me",
      technologies: [
        {
          _id: '0',
          name: 'js',
          image: {
            name: 'js',
            path: 'https://images.unsplash.com/photo-1693802742032-0c0fed0c6626?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3374&q=80'
          }
        }
      ],
    },
    {
      _id: '2',
      title: 'SKU',
      _type: "project",
      image: { name: 'moi', path: 'https://images.unsplash.com/photo-1693922874336-fd3c4b0084b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2567&q=80' },
      linkToBuild: 'https://images.unsplash.com/photo-1693922874336-fd3c4b0084b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2567&q=80',
      summary: "pics of me",
      technologies: [{
        _id: '0',
        name: 'js',
        image: {
          name: 'js',
          path: 'https://images.unsplash.com/photo-1693922874336-fd3c4b0084b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2567&q=80'
        },
      }]
    }
  ]

  // TODOmock data

  return (
    <div className="relative isolate m-auto w-[70%] h-[70%] flex place-items-center rounded-3xl z-10">
      <WorkCards />
    </div>
  );
};

export default Work;
