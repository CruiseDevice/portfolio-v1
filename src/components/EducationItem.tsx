import { TimelineItem, TimelineHeader, TimelineTitle, TimelineDate, TimelineSubtitle } from "../styles/shared";
import { Marginalia } from "./Marginalia";
import { ParallaxMarginalia } from "./ParallaxMarginalia";
import { OverlappingMarginaliaCluster } from "./OverlappingMarginaliaCluster";
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
  const isFirst = !isLast;

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

        {showAnnotations && (
          <>
            {/* EDGE-BLEEDING on left side */}
            <Marginalia
              text="Research milestone!"
              side="left"
              type="emphasis"
              color="red"
              handwritingStyle="casual"
              hasConnector
              position="bleed"
            />

            {/* PARALLAX moving at different speed */}
            <ParallaxMarginalia
              text="Published papers"
              side="right"
              type="note"
              color="blue"
              handwritingStyle="formal"
              hasConnector
              speed={0.25}
            />

            {/* OVERLAPPING CLUSTER for academic achievements */}
            {isFirst && (
              <OverlappingMarginaliaCluster
                side="right"
                items={[
                  { id: '1', text: 'GPA: 4.0/4.0', type: 'note' as const, color: 'blue' as const, handwritingStyle: 'formal' as const },
                  { id: '2', text: 'Dean\'s List', type: 'emphasis' as const, color: 'green' as const, handwritingStyle: 'casual' as const },
                ]}
              />
            )}

            {/* Additional extreme examples */}
            <Marginalia
              text="Excellent foundation"
              side="left"
              type="question"
              color="green"
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
