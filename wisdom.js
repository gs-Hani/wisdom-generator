function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
    //list of wise words of historical figuers
  const wisdom = [
      "Doubt is the origin of wisdom. Augustine of Hippo",
      "The truest wisdom is a resolute determination. Napoleon Bonaparte",
      "Science is organized knowledge. Wisdom is organized life. Immanuel Kant",
      "Foolishness is a twin sister of wisdom. Witold Gombrowicz",
      "Wisdom is not a product of schooling but of the lifelong attempt to acquire it. Albert Einstein",
      "Wisdom is the power to put our time and our knowledge to the proper use. Thomas J. Watson",
      "It is not the man who has too little, but the man who craves more, that is poor. Seneca",
      "A wise man never loses anything, if he has himself. Michel de Montaigne",
      "Silence is the sleep that nourishes wisdom. Francis Bacon",
      "Discipline is wisdom and vice versa. M. Scott Peck",
      "Great wisdom is generous; petty wisdom is contentious. Zhuangzi",
      "Wisdom sails with wind and time. John Florio",
      "A symptom of wisdom is curiosity. The evidence is calmness and perseverance. The causes are experimentation and understanding. Maxime Lagacé",
      "A fool is known by his speech; and a wise man by silence. Pythagoras",
      "The most certain sign of wisdom is cheerfulness. Michel de Montaigne",
      "The fool wonders, the wise man asks. Benjamin Disraeli",
      "There is only a finger\'s difference between a wise man and a fool. Diogenes",
      "Knowledge speaks, but wisdom listens. Jimi Hendrix ",
      "Never say no twice if you mean it. Nassim Nicholas Taleb",
      "Wisdom is nothing but a preparation of the soul, a capacity, a secret art of thinking, feeling and breathing thoughts of unity at every moment of life. Hermann Hesse",
      "Everything comes in time to him who knows how to wait. Leo Tolstoy",
      "Irrigators channel waters; fletchers straighten arrows; carpenters bend wood; the wise master themselves. Buddha",
      "Logic is the beginning of wisdom, not the end. Leonard Nimoy",
      "A lot of wisdom is just realizing the long-term consequences of your actions. The longer term you\'re willing to look, the wiser you\'re going to seem to everybody around you. Naval Ravikant",
      "A weak reaction is to rush things. A strong reaction is to go slow and steady. Maxime Lagacé",
      "The best words are the ones you are ready for. Maxime Lagacé",
      "We don\'t receive wisdom; we must discover it for ourselves after a journey that no one can take for us or spare us. Marcel Proust",
      "Wisdom ceases to be wisdom when it becomes too proud to weep, too grave to laugh, and too selfish to seek other than itself. Kahlil Gibran",
      "Keep me away from the wisdom which does not cry, the philosophy which does not laugh and the greatness which does not bow before children. Kahlil Gibran",
      "A man has made at least a start on discovering the meaning of human life when he plants shade trees under which he knows full well he will never sit. David Elton Trueblood",
      "Educating the mind without educating the heart is no education at all. Aristotle",
      "Honesty is the first chapter in the book of wisdom. Thomas Jefferson",
      "The motto of chivalry is also the motto of wisdom; to serve all, but love only one. Honoré de Balzac",
      "The wise know they are fools. Fools think they are wise. Maxime Lagacé",
      "Maturity is when you stop being surprised by anything. Wisdom is when you start again. Maxime Lagacé",
      "Wisdom and deep intelligence require an honest appreciation of mystery. Thomas Moore",
      "Wisdom is knowing when you can\'t be wise. Paul Engle",
      "Wisdom consists of the anticipation of consequences. Norman Cousins",
      "Wisdom is the knowledge of good and evil, not the strength to choose between the two. John Cheever",
      "The two powers which in my opinion constitute a wise man are those of bearing and forbearing. Epictetus",
      "Wisdom and understanding can only become the possession of individual men by travelling the old road of observation, attention, perseverance, and industry. Samuel Smiles",
      "Wisdom is keeping a sense of fallibility of all our views and opinions. Gerald Brenan",
      "Much wisdom often goes with fewest words. Sophocles",
      "He that composes himself is wiser than he that composes a book. Benjamin Franklin",
      "Do now what your future you will thank you for. Maxime Lagacé",
      "Fast thinking looks cool but it\'s deep thinking that makes all the difference. And deep thinking is always slow thinking.",
      "Who then is free? The wise man who can command himself. Horace",
      "He who would begun has half done. Dare to be wise; begin. Horace",
      "Man is wise and constantly in quest of more wisdom; but the ultimate wisdom, which deals with beginnings, remains locked in a seed. There it lies, the simplest fact of the universe and at the same time the one which calls forth faith rather than reason. Hal Borland",
      "One part of wisdom is knowing what you don\'t need anymore and letting it go. Jane Fonda",
      "First of all, to understand truth you must stand alone, entirely and wholly alone. No Master, no teacher, no guru, no system, no self-discipline will ever lift for you the veil which conceals wisdom. Wisdom is the understanding of enduring values and the living of those values. No one can lead you to wisdom. Jiddu Krishnamurti",
  ];
    console.log('\n Brace yourself for the wisdom!\n \n \n')
    function tellWisdom(){
        setTimeout(()=>console.log(wisdom[generateRandomNumber(wisdom.length)]+'\n'), 4000)
    };
    tellWisdom();