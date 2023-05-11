export const ROLES = [
    {
        id: 0,
        officerId: 0,
        name: 'President',
        duties: ['Arranges meeting dates and meeting agendas', 'Contact for BCFMC members and the Texas Federation of Music Clubs', 'Ensures that Festival and all other events or requirements are fulfilled']
    },
    {
        id: 1,
        officerId: 1,
        name: 'Vice President',
        duties: ['Presides in the absence of the President and assists in any duties as needed', 'Checks registration forms for accuracy', 'Alternate signer on the BCFMC bank account(s)']
    },
    {
        id: 2,
        officerId: 2,
        name: 'Secretary',
        duties: ['Keeps meeting minutes current', 'Maintains calendar and sends meeting reminders']
    },
    {
        id: 3,
        officerId: 3,
        name: 'Treasurer',
        duties: ['Keeps accurate and updated balance sheets to be distributed during meetings', 'Liason to CPA ensuring that BCFMC is up to date with IRS forms and filings', 'As primary account signer, pays all dues to Texas Federation of Music Clubs'],
    },
    {
        id: 4,
        officerId: [4, 5],
        name: 'Festival Chair',
        duties: ['Assigns all duties and supervises procedures for Music Festival Day', 'Maintains stock of ribbons and certificates', 'Prepares gift baskets for Music Festival judges'],
    },
    {
        id: 5,
        officerId: 6,
        name: 'Judges Chair',
        duties: ['Selects, invites, and confirms judges', 'Provides judges with pamphlet detailing requirements for scoring', 'Welcomes and briefs judges on the morning of the Festival'],
    },
    {
        id: 6,
        officerId: 7,
        name: 'Data Entry Chair',
        duties: ['Records all entries before Music Festival checking for correct level and pieces', 'Selects teachers to help on the Music Festival Day (only Recorders to be in room)', 'Records and sends scores to Texas Federation of Music Clubs'],
    },
    {
        id: 7,
        officerId: 8,
        name: 'Refreshments Chair',
        duties: ['Arranges breakfast, snack, and lunch for judges and teachers on Music Festival Day'],
    },
    {
        id: 8,
        officerId: 9,
        name: 'Trophies Chair',
        duties: ['Confirms number and type of Gold Cups needed with Data Entry Chair', 'Orders and distributes trophies after the Music Festival'],
    },
    {
        id: 9,
        officerId: 10,
        name: 'Monitors Chair',
        duties: ['Checks in Music Festival participants and confirms music and critique sheet', 'Oversees ushers that direct participants to their scheduled room', 'Ensures that judges and volunteers have all that is needed and take scheduled breaks'],
    }
]