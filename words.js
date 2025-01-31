const WORD_LIST = [
    'ABOUT', 'AFTER', 'AGAIN', 'ALONE', 'ALONG', 'AMONG', 'APPLY', 'AWARD',
    'BEACH', 'BEGIN', 'BLACK', 'BLAME', 'BLOOD', 'BOARD', 'BREAK', 'BRING',
    'BUILD', 'CARRY', 'CATCH', 'CAUSE', 'CHAIR', 'CHECK', 'CHILD', 'CLEAN',
    'CLEAR', 'CLOSE', 'COLOR', 'COUNT', 'COVER', 'CROSS', 'DANCE', 'DOUBT',
    'DRINK', 'DRIVE', 'EARLY', 'EARTH', 'ENJOY', 'ENTER', 'EQUAL', 'EVENT',
    'EVERY', 'EXACT', 'EXIST', 'FAITH', 'FALSE', 'FAULT', 'FIELD', 'FIGHT',
    'FINAL', 'FIRST', 'FLOOR', 'FOCUS', 'FORCE', 'FRESH', 'FRONT', 'GLASS',
    'GRANT', 'GRASS', 'GREAT', 'GREEN', 'GROUP', 'GUARD', 'GUESS', 'GUEST',
    'HAPPY', 'HEART', 'HEAVY', 'HELLO', 'HORSE', 'HOTEL', 'HOUSE', 'HUMAN',
    'IMAGE', 'INDEX', 'INPUT', 'ISSUE', 'JUDGE', 'KNIFE', 'LAUGH', 'LEARN',
    'LEVEL', 'LIGHT', 'LIMIT', 'LOCAL', 'LOGIC', 'LOOSE', 'LUCKY', 'LUNCH',
    'MAGIC', 'MAJOR', 'MARCH', 'MATCH', 'METAL', 'MONEY', 'MONTH', 'MORAL',
    'MOUSE', 'MOUTH', 'MUSIC', 'NIGHT', 'NOISE', 'NORTH', 'NOVEL', 'NURSE',
    'OCCUR', 'OCEAN', 'OFFER', 'ORDER', 'OTHER', 'OWNER', 'PAINT', 'PAPER',
    'PARTY', 'PEACE', 'PHONE', 'PHOTO', 'PIANO', 'PIECE', 'PILOT', 'PITCH',
    'PLACE', 'PLANT', 'PLATE', 'POINT', 'POUND', 'POWER', 'PRESS', 'PRICE',
    'PRINT', 'PRIZE', 'PROOF', 'PROUD', 'PROVE', 'QUEEN', 'QUICK', 'QUIET',
    'QUITE', 'RADIO', 'RAISE', 'RANGE', 'REACH', 'READY', 'RIGHT', 'RIVER',
    'ROUND', 'ROUTE', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE',
    'SENSE', 'SERVE', 'SHALL', 'SHAPE', 'SHARE', 'SHARP', 'SHEEP', 'SHIFT',
    'SHINE', 'SHIRT', 'SHOCK', 'SHOOT', 'SHORT', 'SIGHT', 'SINCE', 'SKILL',
    'SLEEP', 'SLIDE', 'SMALL', 'SMART', 'SMILE', 'SMOKE', 'SOLID', 'SOLVE',
    'SORRY', 'SOUND', 'SOUTH', 'SPACE', 'SPEAK', 'SPEED', 'SPEND', 'SPIRIT',
    'SPORT', 'SPRING', 'SQUAD', 'STAFF', 'STAGE', 'START', 'STATE', 'STEAM',
    'STEEL', 'STICK', 'STILL', 'STOCK', 'STONE', 'STORE', 'STORY', 'STUDY',
    'STYLE', 'SUGAR', 'SWEET', 'TABLE', 'TASTE', 'TEACH', 'THANK', 'THEME',
    'THERE', 'THINK', 'THREE', 'THROW', 'THUMB', 'TIGER', 'TITLE', 'TODAY',
    'TOUCH', 'TOWER', 'TRACK', 'TRADE', 'TRAIN', 'TREAT', 'TREND', 'TRIAL',
    'TRIBE', 'TRICK', 'TRUST', 'TRUTH', 'TWICE', 'UNCLE', 'UNDER', 'UNITE',
    'UNITY', 'UNTIL', 'UPPER', 'UPSET', 'URBAN', 'USAGE', 'USUAL', 'VALID',
    'VALUE', 'VIDEO', 'VIRUS', 'VISIT', 'VITAL', 'VOICE', 'WASTE', 'WATCH',
    'WATER', 'WHERE', 'WHICH', 'WHILE', 'WHITE', 'WHOLE', 'WHOSE', 'WOMAN',
    'WORLD', 'WORRY', 'WOULD', 'WRITE', 'WRONG', 'YIELD', 'YOUNG', 'YOUTH'
];

// Update the export to work in browser
window.WORD_LIST = WORD_LIST;

// Export the word list
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WORD_LIST;
}
