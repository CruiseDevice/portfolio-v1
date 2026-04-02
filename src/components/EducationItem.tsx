import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { HandUnderline } from "./HandUnderline";
import { Highlight } from "./Highlight";
import { WithCitation } from "./CitationButton";

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
  // Add annotations to items as examples
  const showAnnotations = !isLast;

  return (
    <WithCitation
      title={`${degree} - ${institution}`}
      author={institution}
      year={duration.split(' - ')[0]}
      format="mla"
      color="green"
    >
      <TimelineItem style={{ position: 'relative' }}>
        <TimelineHeader>
          <TimelineTitle>
            {degree}
            {showAnnotations && (
              <HandUnderline color="green">
                <Highlight color="yellow">Academic Focus</Highlight>
              </HandUnderline>
            )}
          </TimelineTitle>
          <TimelineDate>{duration}</TimelineDate>
        </TimelineHeader>
        <TimelineSubtitle>{institution}</TimelineSubtitle>
      </TimelineItem>
    </WithCitation>
  );
}

export default EducationItem;
