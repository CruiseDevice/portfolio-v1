import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";

function EducationItem({
  degree,
  institution,
  duration,
  isLast = false
}: {
  degree: string;
  institution: string;
  duration: string;
  isLast?: boolean;
}) {
  return (
    <TimelineItem>
      <TimelineHeader>
        <TimelineTitle>{degree}</TimelineTitle>
        <TimelineDate>{duration}</TimelineDate>
      </TimelineHeader>
      <TimelineSubtitle>{institution}</TimelineSubtitle>
    </TimelineItem>
  );
}

export default EducationItem;
