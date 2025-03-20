/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "../../Components/Layout"
// import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {  useState } from "react";

// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';

// import ListItemText from '@mui/material/ListItemText';

// import FormGroup from '@mui/material/FormGroup';

// import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';


import Hadding from "../../Components/Hadding";
import CorePrincipals from "./corePrincipals";



const features = [
  {
    name: "Key Aspects of His Early Life",
    description: [
      "Birth and Orphanhood: Born in 570 CE in Makkah; lost his father before birth, mother at six, and grandfather at eight.",
      "Upbringing by Abu Talib: Raised by his uncle, who supported and protected him throughout his youth.",
      "Character and Reputation: Known as 'Al-Sadiq' (The Truthful) and 'Al-Amin' (The Trustworthy) for his honesty and integrity.",
      "Work and Trade: Worked as a shepherd and later became a successful merchant, earning respect for his fairness",
      "Spiritual Inclination: Never engaged in idol worship and frequently sought solitude in the Cave of Hira for reflection.",
    ],
  },
  {
    name: "Importance of His Early Life",
    description: [
      "Moral Development: Demonstrated honesty, patience, and kindness, setting an example for all.",
      "Preparation for Prophethood: His experiences shaped him into a compassionate and just leader.",
      "Influence on Society: His upright nature earned him respect, making it easier for people to trust his message later.",
    ],
  },
  {
    name: "Why Studying His Early Life is Essential",
    description: [
      "Teaches Resilience and Patience: Shows how to overcome hardships with faith and perseverance.",
      "Inspires Honesty and Integrity: Encourages truthfulness in personal and professional life.",
      "Builds a Strong Connection with the Prophet (PBUH): Helps understand his struggles and wisdom before his divine mission.",
    ],
  },
  {
    name: "Hadith About His Character",
    description: [
      "'I have been sent to perfect good character.' (Sunan Al-Bukhari)",
      "'The best among you are those who have the best manners and character.' (Sahih al-Bukhari)",
      "'The Messenger of Allah (PBUH) was the best of people in character.' (Sahih al-Bukhari)",
    ],
  },
 
];
const features2 = [
  {
    name: "Importance of Prophet Muhammad’s (PBUH) Character",
    description: [
      "Embodiment of the Qur'an: His actions and words reflected the teachings of Islam.",
      "Universal Role Model: His kindness, humility, and integrity serve as an example for all humanity.",
      "Foundation of Islamic Ethics: His behavior laid the principles of honesty, justice, and compassion in society.",
     
    ],
  },
  {
    name: "Key Aspects of His Moral Conduct",
    description: [
      "Truthfulness & Honesty: Known as 'Al-Sadiq' (The Truthful) and 'Al-Amin' (The Trustworthy).",
      "Kindness & Mercy: Treated all people, including enemies, with gentleness and forgiveness.",
      "Humility & Simplicity: Lived a modest life, despite being a leader.",
      "Justice & Fairness: Ensured rights were given to everyone, regardless of status.",
      "Patience & Perseverance: Endured hardships with unwavering faith in Allah.",
    ],
  },
  {
    name: "Hadith on His Character",
    description: [
      "Aisha (RA) said: “The character of the Prophet (PBUH) was the Qur'an.” (Sahih Muslim)",
      "The Prophet (PBUH) said: “The best among you are those who have the best character.” (Sahih Bukhari)",

    ],
  },
  
 
];
const features3 = [
  {
    "name": "Importance of His Relationships & Social Conduct",
    "description": [
      "Model of Compassion: He displayed love and care for his family, friends, and even adversaries.",
      "Promoter of Social Justice: He uplifted the oppressed and established fairness in society.",
      "Unifier of Communities: He built strong bonds between people, fostering peace and brotherhood."
    ]
  },
  {
    "name": "Key Aspects of His Social Life",
    "description": [
      "Family Relations: Showed immense love and respect for his wives, children, and relatives.",
      "Friendship & Brotherhood: Treated his companions as equals, fostering deep bonds of loyalty.",
      "Kindness to Neighbors: Encouraged good treatment of neighbors, regardless of faith.",
      "Support for the Poor & Weak: Advocated for the rights of orphans, widows, and the needy.",
      "Forgiveness & Tolerance: Forgave even those who harmed him, promoting peace and unity."
    ]
  },
  {
    "name": "Hadith on His Social Conduct",
    "description": [
      "The Prophet (PBUH) said: “The best of you are those who are best to their families.” (Sunan Ibn Majah)",
      "The Prophet (PBUH) also said: “He is not a true believer whose neighbor is not safe from his harm.” (Sahih Bukhari)"
    ]
  }
];

const features5 = [
  {
    "name": "Importance of Learning from His Life",
    "description": [
      "Moral and Ethical Guidance: Teaches honesty, humility, patience, and kindness.",
      "Leadership & Resilience: Demonstrates perseverance, wisdom, and justice in leadership.",
      "Faith & Spiritual Growth: Strengthens belief in Allah and reliance on divine guidance."
    ]
  },
  {
    "name": "Key Lessons from His Life",
    "description": [
      "Sincerity & Truthfulness: Always spoke the truth, earning the title 'Al-Sadiq' (The Truthful).",
      "Perseverance in Hardships: Faced persecution with patience and unwavering faith.",
      "Kindness & Forgiveness: Showed mercy even to those who opposed him.",
      "Justice & Fairness: Ensured rights for all, regardless of background or status.",
      "Humility & Simplicity: Lived a modest life, despite being a leader."
    ]
  },
  {
    "name": "Hadith on Learning from His Life",
    "description": [
      "The Prophet (PBUH) said: 'I have only been sent to perfect good character.' (Sunan Al-Bayhaqi)",
      "The Prophet (PBUH) also said: 'The best among you are those who have the best manners and character.' (Sahih Bukhari)"
    ]
  }
];
const features4 = [
  {
    "name": "Importance of His Contributions to Law & Society",
    "description": [
      "Foundation of Islamic Law: Established a just legal system based on divine revelation.",
      "Social Reforms: Advocated for equality, women's rights, and the welfare of the poor.",
      "Moral & Ethical Governance: Promoted justice, accountability, and fairness in leadership."
    ]
  },
  {
    "name": "Key Aspects of His Legal & Social Reforms",
    "description": [
      "Constitution of Madinah: Created the first written constitution ensuring religious freedom and coexistence.",
      "Justice & Fairness: Ensured that laws were applied equally to all, regardless of status or background.",
      "Women's Rights: Introduced inheritance rights, protection in marriage, and social dignity for women.",
      "Economic Justice: Condemned exploitation, encouraged fair trade, and established charity systems like Zakat.",
      "Abolition of Tribal Discrimination: United different tribes under one nation, eliminating unjust prejudices."
    ]
  },
  {
    "name": "Hadith on Law & Justice",
    "description": [
      "The Prophet (PBUH) said: “The most beloved of people to Allah is the one who brings the most benefit to others.” (Al-Mu'jam Al-Awsat)",
      "The Prophet (PBUH) also said: “Indeed, the most beloved of you to me is the best of you in character.” (Sunan Tirmidhi)"
    ]
  }
];

//    





const earlylife = () => {




  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };





  return (
    <Layout>
      <div className="container mx-auto py-16">
      {/* <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            
            <Tab label="The Early Life of Prophet Muhammad (PBUH)" value="1" />
            <Tab label="Prophet Muhammad's (PBUH) Character and Moral Conduct" value="2" />
            <Tab label="Prophet Muhammad's (PBUH) Relationships and Social Life" value="3" />
            
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
       
      </TabContext>
    </Box> */}

<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable lab API tabs example"
          >
            <Tab  label="The Early Life of Prophet Muhammad (PBUH)" value="1" />
            <Tab label="Prophet Muhammad's (PBUH) Character and Moral Conduct" value="2" />
            <Tab label="Prophet Muhammad's (PBUH) Relationships and Social Life" value="3" />
            <Tab label="Prophet Muhammad's (PBUH) Contributions to Law and Society" value="4" />
            <Tab label="Lessons from Prophet Muhammad's (PBUH) Life" value="5" />
          </Tabs>
        </Box>
        {/* <TabPanel value="1">
        <div className="overflow-hidden bg-white py-7 sm:py-6">
      <div className="mx-auto max-w-7xl px-0 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600"> Definition</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
              The Early Life of Prophet Muhammad (PBUH)

              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              The early life of Prophet Muhammad (PBUH) refers to the period before his prophethood, covering his birth, upbringing, character, and experiences. It highlights the challenges he faced, his exceptional morals, and his preparation for his divine mission.</p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
  <div key={feature.name} className="relative pl-9">
    <dt className="inline font-semibold text-gray-900">
      {feature.name}
    </dt>
    <ul className="list-disc pl-5 text-gray-700">
      {feature.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
  </div>
))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            width={2432}
            height={1442}
            className="w-[20rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
        </TabPanel> */}
<TabPanel value="1">
  <div className="relative isolate overflow-hidden bg-white py-7 sm:py-6 lg:overflow-visible">
    <div className="mx-auto max-w-7xl px-0 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Definition</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
                The Early Life of Prophet Muhammad (PBUH)
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                The early life of Prophet Muhammad (PBUH) refers to the period before his prophethood, covering his birth, upbringing, character, and experiences. It highlights the challenges he faced, his exceptional morals, and his preparation for his divine mission.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">{feature.name}</dt>
                    <ul className="list-disc pl-5 text-gray-700">
                      {feature.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            className="w-[20rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  </div>
</TabPanel>
<TabPanel value="2">
  <div className="relative isolate overflow-hidden bg-white py-7 sm:py-6 lg:overflow-visible">
    <div className="mx-auto max-w-7xl px-0 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Definition</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
              Prophet Muhammad&apos;s (PBUH) Character and Moral Conduct
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              The character and moral conduct of Prophet Muhammad (PBUH) refer to his exemplary behavior, ethics, and interactions with people. His life serves as a model of kindness, honesty, patience, and justice, demonstrating the highest standards of morality in personal, social, and spiritual aspects.
              </p>
             
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features2.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">{feature.name}</dt>
                    <ul className="list-disc pl-5 text-gray-700">
                      {feature.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg/8 text-gray-600">
              Prophet Muhammad’s (PBUH) moral conduct remains a timeless example of virtue, influencing millions to strive for goodness, justice, and kindness in their daily lives.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            className="w-[20rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  </div>
</TabPanel>
<TabPanel value="3">
  <div className="relative isolate overflow-hidden bg-white py-7 sm:py-6 lg:overflow-visible">
    <div className="mx-auto max-w-7xl px-0 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Definition</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
              Prophet Muhammad&apos;s (PBUH) Relationships and Social Life
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Prophet Muhammad’s (PBUH) relationships and social life highlight his interactions with family, companions, and society. He was known for his deep compassion, justice, and humility, treating everyone with kindness and respect, regardless of their background or status.
              </p>
             
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features3.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">{feature.name}</dt>
                    <ul className="list-disc pl-5 text-gray-700">
                      {feature.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg/8 text-gray-600">
              Prophet Muhammad (PBUH) set the highest example of maintaining relationships with love, respect, and justice, shaping a society built on mutual care and harmony.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            className="w-[20rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  </div>
</TabPanel>
<TabPanel value="4">
  <div className="relative isolate overflow-hidden bg-white py-7 sm:py-6 lg:overflow-visible">
    <div className="mx-auto max-w-7xl px-0 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Definition</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
              Prophet Muhammad&apos;s (PBUH) Contributions to Law and Society
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              Prophet Muhammad’s (PBUH) contributions to law and society transformed the moral, legal, and social structures of his time. He established justice, fairness, and equality as core principles, ensuring the protection of human rights and social welfare. His legal framework continues to guide Islamic law and ethical governance.
              </p>
             
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features4.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">{feature.name}</dt>
                    <ul className="list-disc pl-5 text-gray-700">
                      {feature.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg/8 text-gray-600">
              Prophet Muhammad’s (PBUH) legal and social reforms created a just, inclusive, and compassionate society, setting an enduring example for governance and human rights.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            className="w-[20rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  </div>
</TabPanel>
<TabPanel value="5">
  <div className="relative isolate overflow-hidden bg-white py-7 sm:py-6 lg:overflow-visible">
    <div className="mx-auto max-w-7xl px-0 lg:px-8">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">Definition</h2>
              <p className="mt-2 text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-2xl">
              Lessons from Prophet Muhammad&apos;s (PBUH) Life
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              The life of Prophet Muhammad (PBUH) is a source of guidance and wisdom for all aspects of life. His actions, teachings, and character provide valuable lessons on faith, morality, leadership, and personal development. His life serves as a model for individuals seeking success in both worldly and spiritual matters.
              </p>
             
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features5.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">{feature.name}</dt>
                    <ul className="list-disc pl-5 text-gray-700">
                      {feature.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-lg/8 text-gray-600">
              The life of Prophet Muhammad (PBUH) provides timeless lessons on morality, leadership, and faith, inspiring people to live with purpose, integrity, and compassion.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Product screenshot"
            src="../../../public/Seerat.jpg"
            className="w-[20rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[44rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  </div>
</TabPanel>


       
   
      </TabContext>
    </Box>
    </div>



    <Hadding text='Core Islamic Practices' />



    <CorePrincipals />
 
    </Layout>
  )
}

export default earlylife