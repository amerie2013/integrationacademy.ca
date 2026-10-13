// Third-party exam marks. Courses that prepare students for an external exam
// name it only to say what they prepare for, and must carry the owner's
// trademark notice wherever the course is presented (course page, lessons).

const NOTICES: Record<string, string> = {
  APCALCAB:
    "AP® and Advanced Placement® are registered trademarks of the College Board, which was not involved in the production of, and does not endorse, this course. All lessons, questions and figures are original to Integration Academy.",
  IBAASL:
    "International Baccalaureate® and IB® are registered trademarks of the International Baccalaureate Organization, which was not involved in the production of, and does not endorse, this course.",
};

/** The trademark notice for a course code, or null when the course needs none. */
export function courseNotice(code?: string | null): string | null {
  return NOTICES[code ?? ""] ?? null;
}

/** Site-wide footer line covering every third-party exam named on the site. */
export const SITE_TRADEMARK_NOTICE =
  "AP® is a registered trademark of the College Board. IB® is a registered trademark of the International Baccalaureate Organization. Neither organization is affiliated with or endorses Integration Academy.";
