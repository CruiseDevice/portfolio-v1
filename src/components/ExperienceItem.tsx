import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";

function ExperienceItem({
  organization,
  designation,
  duration,
  isCurrent = false,
  isLast = false
}: {
  organization: string;
  designation: string;
  duration: string;
  isCurrent?: boolean;
  isLast?: boolean;
}) {
  return (
    <TimelineItem>
      <TimelineHeader>
        <TimelineTitle>{designation}</TimelineTitle>
        <TimelineDate>{duration}</TimelineDate>
      </TimelineHeader>
      <TimelineSubtitle>{organization}</TimelineSubtitle>
    </TimelineItem>
  );
}

export default ExperienceItem;
