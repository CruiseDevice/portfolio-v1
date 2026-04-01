import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { Marginalia } from "./Marginalia";
import { HandUnderline } from "./HandUnderline";
import { Highlight } from "./Highlight";

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
  // Add annotations to first item as example
  const showAnnotations = !isLast;

  return (
    <TimelineItem>
      <TimelineHeader>
        <TimelineTitle>
          {designation}
          {showAnnotations && (
            <HandUnderline color="blue" wave>
              <Highlight color="yellow">Key Role</Highlight>
            </HandUnderline>
          )}
        </TimelineTitle>
        <TimelineDate>{duration}</TimelineDate>
      </TimelineHeader>
      <TimelineSubtitle>{organization}</TimelineSubtitle>

      {showAnnotations && (
        <>
          {isCurrent && (
            <Marginalia
              text="Current role!"
              side="right"
              type="emphasis"
              color="green"
              handwritingStyle="playful"
              hasConnector
            />
          )}
          {!isCurrent && (
            <Marginalia
              text="Career highlight!"
              side="right"
              type="emphasis"
              color="blue"
              handwritingStyle="casual"
              hasConnector
            />
          )}
          <Marginalia
            text="Important milestone"
            side="left"
            type="note"
            color="pencil"
            handwritingStyle="formal"
          />
        </>
      )}
    </TimelineItem>
  );
}

export default ExperienceItem;
