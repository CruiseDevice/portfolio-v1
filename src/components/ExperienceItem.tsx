import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { Marginalia } from "./Marginalia";
import { ParallaxMarginalia } from "./ParallaxMarginalia";
import { OverlappingMarginaliaCluster } from "./OverlappingMarginaliaCluster";
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
  // Add annotations to items as examples
  const showAnnotations = !isLast;
  const isFirst = !isLast && isCurrent;
  const isMiddle = !isLast && !isCurrent;

  return (
    <WithCitation
      title={`${designation} at ${organization}`}
      author={organization}
      year={duration.split(' - ')[0]}
      format="apa"
      color="blue"
    >
      <TimelineItem style={{ position: 'relative' }}>
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
            {/* EDGE-BLEEDING: Note partially off-screen */}
            {isCurrent && (
              <Marginalia
                text="Current role!"
                side="right"
                type="emphasis"
                color="red"
                handwritingStyle="casual"
                hasConnector
                position="bleed"
              />
            )}

            {/* PARALLAX: Scroll-responsive note */}
            {isMiddle && (
              <ParallaxMarginalia
                text="Career growth"
                side="left"
                type="note"
                color="blue"
                handwritingStyle="formal"
                hasConnector
                speed={0.15}
              />
            )}
            
            {/* Additional extreme examples */}
            {isMiddle && (
              <Marginalia
                text="Important milestone"
                side="right"
                type="question"
                color="green"
                handwritingStyle="playful"
                position="bleed"
              />
            )}
          </>
        )}
      </TimelineItem>
    </WithCitation>
  );
}

export default ExperienceItem;
