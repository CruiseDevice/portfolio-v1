import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { Marginalia } from "./Marginalia";
import { HandUnderline } from "./HandUnderline";
import { Highlight } from "./Highlight";
import { WithCitation } from "./CitationButton";

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
    <WithCitation
      title={`${designation} at ${organization}`}
      author={organization}
      year={duration.split(' - ')[0]}
      format="apa"
      color="blue"
    >
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
    </WithCitation>
  );
}

export default ExperienceItem;
