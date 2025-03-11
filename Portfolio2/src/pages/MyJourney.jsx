import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function MyJourneyPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-10">
      <h2 className="text-3xl font-bold mb-6">My Journey 🚀</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1f2937', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1f2937' }}
          date="2023 - Present"
          iconStyle={{ background: '#facc15', color: '#fff' }}
        >
          <h3 className="text-xl font-semibold">Started my Web Development Journey</h3>
          <p>Learned HTML, CSS, JavaScript, React.js, Tailwind CSS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1f2937', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1f2937' }}
          date="2024"
          iconStyle={{ background: '#facc15', color: '#fff' }}
        >
          <h3 className="text-xl font-semibold">Participated in Hackathons 🚀</h3>
          <p>Built AI-powered educational platforms, environmental projects, and won prizes.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1f2937', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1f2937' }}
          date="2025"
          iconStyle={{ background: '#facc15', color: '#fff' }}
        >
          <h3 className="text-xl font-semibold">Created My Personal Portfolio 🚀</h3>
          <p>Designed and developed a fully functional portfolio website to showcase my work.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}