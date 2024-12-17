import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Text Content */}
        <div>
          <p className="text-[#005286] text-xl font-semibold mb-4">What is the The God Image Inventory (GII)?</p>
          <p className="mb-4">
            The God Image Inventory (GII) is a psychological tool designed to explore how individuals perceive and relate to God,
            focusing on emotional, relational, and conceptual dimensions. It provides insight into one’s attachment, trust, and feelings
            toward God, often revealing underlying spiritual or psychological dynamics. The accompanying scoring program analyzes responses
            to generate meaningful profiles, aiding counselors, researchers, and faith leaders in understanding and addressing these perspectives.
            Through its nuanced lens, the GII offers a bridge between faith and psychology, fostering deeper personal and spiritual growth.
          </p>
        </div>
        
        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/God.png"
            alt="God"
            className="w-full h-auto max-w-md rounded-lg shadow-lg opacity-70"
          />
        </div>
      </div>

      {/* Supplemental Reading Section */}
      <div className="mt-8">
        <p className="text-[#005286] text-xl font-semibold mb-4">Supplemental Reading</p>
        <ol className="list-decimal pl-5 space-y-2 italic text-sm text-gray-500">
          <li>
            <a
              href="/pdfs/25-214.pdf"
              target="_blank"
              className="italic text-sm text-gray-500 hover:underline"
            >
              Measuring the Image of God: The God Image Inventory and the God Image Scales (1997)
            </a>
          </li>

          <li>
            <a
              href="/pdfs/hood.pdf"
              target="_blank"
              className="italic text-sm text-gray-500 hover:underline"
            >
               Measures of Religiosity by Hill, P. C., & Hood, R. W., Jr. (Eds.). (1999)
            </a>
          </li>

          <li>
            <a
              href="/pdfs/rizzuto.pdf"
              target="_blank"
              className="italic text-sm text-gray-500 hover:underline"
            >
               A brief synopsis of Dr. Ana Marie Rizzuto's theory, which is foundational to the development of the GII, is found in her presentation on "Distinguishing Between the Concept and Image of God"
            </a>
          </li>

          <li>
            <a
              href="/pdfs/dissertation.pdf"
              target="_blank"
              className="italic text-sm text-gray-500 hover:underline"
            >
               Developing a Web-based Scoring Program for the God Image Inventory by Jay Gattis, Psy.D
            </a>
          </li>

        </ol>
      </div>

      {/* What to Look for Section */}
      <div className="mt-8">
        <p className="text-[#005286] text-xl font-semibold mb-4">What to Look for while Reading the Articles</p>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-500">
          <li>What is the God image and what is it composed of?</li>
          <li>The difference between God image and God concept.</li>
          <li>The relationship between God image and self image.</li>
          <li>What is the basis of the GII scales?</li>
          <li>Which GII scales displayed the most distinction in factor structure?</li>
          <li>What are the proposed uses of GII?</li>
          <li>How is the GIS different from the GII?</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
