import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { Marginalia } from "./Marginalia";
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
  // Add annotations to first item as example
  const showAnnotations = !isLast;

  return (
    <WithCitation
      title={`${degree} - ${institution}`}
      author={institution}
      year={duration.split(' - ')[0]}
      format="mla"
      color="green"
    >
      <TimelineItem>
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

        {showAnnotations && (
          <>
            <Marginalia
              text="Research milestone!"
              side="right"
              type="emphasis"
              color="green"
              handwritingStyle="casual"
              hasConnector
            />
            <Marginalia
              text="Key achievement"
              side="left"
              type="note"
              color="pencil"
              handwritingStyle="formal"
            />
            <Marginalia
              text="Excellent foundation"
              side="right"
              type="question"
              color="blue"
              handwritingStyle="playful"
              position="bleed"
            />
          </>
        )}
      </TimelineItem>
    </WithCitation>
  );
}

export default EducationItem;
