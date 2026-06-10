/* eslint-disable no-unused-vars */
import React from "react";

const CheckIcon = () => (
    <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-white"
    >
        <circle cx="12" cy="12" r="10" fill="currentColor"/>
        <path
            d="M8 12.5L11 15.5L16 9"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);


const PracticeAreaCard = ({
    number,
    title,
    listCol1,
    listCol2,
    paragraphs,
}) => {

return (

<div className="
relative
w-full
mx-auto
mb-10
px-3
sm:px-4
md:px-8
overflow-hidden
">


<div
className="
relative
z-10
bg-none
p-5
sm:p-8
md:p-12
lg:pt-6
rounded-sm
border
border-none
flex
flex-col
gap-6
">


<h3

className="
text-xl
sm:text-2xl
md:text-3xl
text-center
font-bold
relative
inline-block
mx-auto
mb-6
rounded-sm
p-2
text-[#e0e0e0]
break-words
"

>

{title}


<div className="
absolute
left-1/4
right-1/4
h-0.5
bg-[#c4a661]
-bottom-3
"></div>


</h3>



{(listCol1 || listCol2) && (

<div

className="
grid
grid-cols-1
sm:grid-cols-2
gap-x-6
md:gap-x-12
lg:gap-x-20
gap-y-6
mb-8
max-w-5xl
mx-auto
w-full
px-2
sm:px-4
"

>


{listCol1 && (

<ul className="space-y-4 w-full">


{listCol1.map((item,idx)=>(


<li

key={idx}

className="
flex
items-start
gap-3
text-[#e0e0e0]
text-sm
sm:text-base
md:text-lg
leading-relaxed
break-words
"

>


<div className="mt-1">

<CheckIcon/>

</div>


<span>

{item}

</span>


</li>


))}


</ul>

)}



{listCol2 && (

<ul className="space-y-4 w-full">


{listCol2.map((item,idx)=>(


<li

key={idx}

className="
flex
items-start
gap-3
text-[#e0e0e0]
text-sm
sm:text-base
md:text-lg
leading-relaxed
break-words
"

>


<div className="mt-1">

<CheckIcon/>

</div>


<span>

{item}

</span>


</li>


))}


</ul>

)}


</div>

)}




<div

className="
space-y-0
text-[#e0e0e0]
text-sm
sm:text-base
md:text-lg
lg:text-[20px]
leading-relaxed
text-justify
break-words
"

>


{paragraphs.map((para,idx)=>(

<p key={idx}>

{para}

</p>

))}


</div>


</div>


</div>


);

};




const PracticeAreasContent = () => {


return (


<section

className="
py-10
sm:py-12
md:py-16
px-3
sm:px-4
md:px-8
bg-[#303030]
relative
overflow-hidden
"

>

<div className="text-center mb-10">


<p className="
text-[#e0e0e0]
mb-4
tracking-wide
text-sm
sm:text-base
">

How Can We Help You ?

</p>



<h2

className="
text-2xl
sm:text-3xl
md:text-5xl
text-[#e0e0e0]
font-bold
uppercase
tracking-wider
mb-6
break-words
"

>

What can we <span className="text-[#e0e0e0]">

help you

</span> with


</h2>


<div className="
w-20
md:w-32
h-0.5
bg-[#c4a661]
mx-auto
"></div>


</div>


<div className="
w-full
px-1
sm:px-2
lg:px-8
mx-auto
space-y-8
"></div>


{/* KEEP ALL YOUR PracticeAreaCard DATA BELOW EXACTLY SAME */}


            {/* Cards Container */}
            <div className="w-full px-2 lg:px-8 mx-auto space-y-8">
                {/* Area 1 */}
                <PracticeAreaCard
                    number="01"
                    title="Civil Litigation & Dispute Resolution"
                    listCol1={[
                        "Money recovery suits and summary suits",
                        "Breach of contract cases",
                        "Specific performance suits",
                        "Injunction matters",

                    ]}
                    listCol2={[
                        "Civil appeals and revisions",
                        "Partition suits",
                        "Filing and defending caveats",
                        "All other civil litigation matters",
                        "Declaration suits",
                    ]}
                    paragraphs={[
                        "The firm handles civil litigation and dispute resolution matters before the District Courts, the High Court of Meghalaya, and other appropriate forums. This practice area covers a wide range of civil disputes involving individuals, companies, banks, financial institutions, government entities, and other organizations. It includes filing and defending suits for recovery of money, breach of contract, specific performance of agreements, temporary and permanent injunctions, declarations regarding legal rights, partition of property, filing and defending caveats, as well as civil appeals and revisions.",
                        "Civil litigation proceedings are governed primarily by the Code of Civil Procedure, 1908, along with various substantive laws depending on the nature of the dispute. The process typically involves drafting plaints or written statements, filing interim applications for injunctions or attachments, recording of evidence, arguments, and pronouncement of judgment. Appeals and revisions may be filed against orders or decrees before higher courts. The firm provides assistance in drafting pleadings, filing of applications, preparation of evidence, and representation in civil proceedings in accordance with the Code of Civil Procedure and other relevant laws. Matters in this area often require detailed examination of documents, contractual terms, and limitation periods to protect the legal rights of the parties involved.",
                    ]}
                />

                {/* Area 2 */}
                <PracticeAreaCard
                    number="02"
                    title="Criminal Litigation & Defense"
                    listCol1={[
                        "Anticipatory and regular bail applications",
                        "Quashing of FIR under Section 482 CrPC",
                        "Trial representation in Sessions and Magistrate Courts",
                    ]}
                    listCol2={[
                        "Appeals in High Court and Supreme Court",
                        "Economic offences and white-collar crimes",
                        "NDPS, POCSO, and other special cases",
                    ]}
                    paragraphs={[
                        "The firm handles criminal litigation and defense matters before the Magistrate Courts, Sessions Courts, the High Court of Meghalaya, and the Supreme Court of India. This practice area covers representation in criminal proceedings at various stages, including anticipatory and regular bail applications, petitions for quashing of FIR under Section 482 of the Code of Criminal Procedure, trial representation, and appeals. It includes cases involving economic offences, white-collar crimes, and matters under special statutes such as the NDPS Act and POCSO Act.",
                        "Criminal proceedings generally begin with registration of FIR or complaint, followed by investigation, charge sheet or final report, framing of charges, recording of evidence, and final arguments. Bail applications are filed under relevant provisions depending on the nature and seriousness of the offence. Quashing petitions are preferred before the High Court when FIRs are alleged to be frivolous or an abuse of process. Appeals lie before higher courts against conviction or acquittal orders. The firm provides assistance in filing applications, representation during trials and hearings, and preparation of appeals in accordance with the Code of Criminal Procedure and other relevant laws. Each case requires careful analysis of evidence, procedural compliance, and applicable penal provisions.",
                    ]}
                />

                {/* Area 3 */}

                {/* Area 4 */}
                <PracticeAreaCard
                    number="04"
                    title="Real Estate & Property Law"
                    listCol1={[
                        "Title verification and due diligence",
                        "Sale deeds, gift deeds, and lease agreements",
                        "Landlord-tenant disputes",
                        "Land acquisition and revenue matters",
                        "All other real estate and property law matters",

                    ]}
                    listCol2={[
                        "Inheritance and succession-related property issues",
                        "Customary land rights under Khasi, Garo, and Jaintia laws",
                        "Registration and documentation of property transactions",
                        "Eviction proceedings",
                        "Property partition matters",
                    ]}
                    paragraphs={[
                        "This practice area relates to real estate and property law matters before civil courts, revenue authorities, registration offices, the High Court and other appropriate forums. Property matters may involve ownership, possession, transfer, inheritance, tenancy, boundaries, registration, or land revenue issues.\n" +
                        "The work may include title verification, due diligence, drafting and review of sale deeds, gift deeds, lease agreements, landlord-tenant disputes, eviction proceedings, partition, inheritance, customary land rights, registration, documentation, land acquisition, mutation, and revenue matters.\n" +
                        "Property transactions generally require examination of title documents, chain of ownership, revenue records, mutation entries, encumbrances, possession records, succession documents, and applicable local laws.  property matters may also involve customary practices and land rights relating to Khasi, Garo, and Jaintia communities.\n" +
                        "Disputes may arise from unclear title, competing inheritance claims, illegal possession, boundary disputes, refusal to execute documents, breach of sale agreement, tenancy disputes, or acquisition proceedings. Such matters may require legal notices, suits for declaration, injunctions, partition proceedings, eviction cases, or representation before revenue authorities.\n" +
                        "Registration and documentation require compliance with applicable stamp duty, registration procedure, identification of parties, description of property, and execution requirements.\n"
                    ]}
                />

                <PracticeAreaCard
                    number="04"
                    title="Family & Matrimonial Law"
                    listCol1={[
                        "Mutual consent divorce",
                        "Contested divorce proceedings",
                        "Child custody matters",
                        "Visitation rights",
                        "All other family and matrimonial law matters",
                    ]}
                    listCol2={[
                        "Maintenance and alimony cases",
                        "Domestic violence cases",
                        "Wills, trusts, and succession matters",
                        "Muslim law matters",
                        "Adoption and guardianship proceedings",
                    ]}
                    paragraphs={[
                        "This practice area covers family and matrimonial law matters before District Courts, Family Courts, the High Court and other appropriate forums. Family matters may involve marriage, divorce, custody, maintenance, domestic violence, guardianship, adoption, succession, wills, trusts, and personal law issues.",
                        "The work may include mutual consent divorce, contested divorce, child custody, visitation rights, maintenance, alimony, domestic violence proceedings, succession matters, Muslim law matters, adoption, guardianship, and preparation of family settlement documents.Matrimonial proceedings may be governed by applicable personal laws and secular statutes depending on the parties and nature of the dispute.Divorce proceedings may involve grounds such as cruelty, desertion, mutual consent, or other legally recognised grounds.Mutual consent divorce generally requires settlement terms and compliance with statutory procedure.",
                        "Child custody and visitation matters are considered with reference to the welfare of the child. Maintenance and alimony claims may involve assessment of income, expenses, dependency, standard of living, and legal entitlement. Domestic violence proceedings may involve protection orders, residence orders, monetary relief, custody orders, or compensation.",
                        "Succession and will matters may require compliance with the Indian Succession Act, personal laws, or applicable customary practices. Adoption and guardianship proceedings may require documents, consent, verification, and court approval where applicable.",
                    ]}
                />

                <PracticeAreaCard
                    number={"05"}
                    title={"Corporate & Commercial Law"}
                    listCol1={[
                        "Company incorporation and compliance",
                        "Drafting and review of commercial contracts",
                        "Mergers, acquisitions, and restructuring",
                        "Corporate governance and secretarial matters",
                        "All other corporate and commercial law matters",
                    ]}
                    listCol2={[
                        "Intellectual property licensing and agreements",
                        "Joint ventures and strategic alliances",
                        "Securities law compliance",
                        "Insolvency and bankruptcy proceedings",
                        "Dispute resolution in commercial matters",
                    ]}
                    paragraphs={[
                        "This practice area relates to corporate and commercial law matters for companies, firms, startups, business entities, investors, and commercial organisations. Corporate work may involve incorporation, statutory compliance, contracts, business arrangements, restructuring, investment documentation, and regulatory filings.",
                        "The work may include company incorporation, corporate compliance, drafting and vetting of commercial contracts, mergers and acquisitions, joint ventures, startup advisory, shareholder agreements, foreign investment matters, FDI compliance, and related business documentation.",
                        "Company incorporation is governed by the Companies Act, 2013, and rules issued by the Ministry of Corporate Affairs. The process generally involves preparation and filing of incorporation documents, obtaining certificates, maintaining statutory records, and complying with post-incorporation obligations.",
                        "Commercial contracts may include service agreements, supply agreements, consultancy agreements, employment contracts, confidentiality agreements, licensing agreements, investment documents, distribution agreements, and partnership or collaboration documents. Such contracts generally address obligations, consideration, timelines, termination, liability, indemnity, governing law, and dispute resolution.",
                        "Mergers, acquisitions, and joint ventures may involve due diligence, regulatory review, transaction documents, approvals, disclosures, and compliance with applicable corporate and financial regulations. Startup-related work may include founder arrangements, investment agreements, employment documentation, intellectual property assignment, and compliance requirements.",
                        "Foreign investment matters may require review of FDI policy, FEMA regulations, sectoral limits, reporting requirements, and approval conditions where applicable.",
                    ]}
                />
                <PracticeAreaCard
                    number={"06"}
                    title={"Taxation & GST"}
                    listCol1={[
                        "GST registration",
                        "GST filing and compliance",
                        "Income tax return-related assistance",
                        "Income tax assessment matters",
                        "All other taxation and GST matters",
                    ]}
                    listCol2={[
                        "Tax appeals before CIT(A)",
                        "Tax appeals before ITAT",
                        "GST audit matters",
                        "Replies to GST show-cause notices",
                        "Tax planning and advisory",
                    ]}
                    paragraphs={[
                        "This practice area covers taxation and GST matters before tax authorities, appellate authorities, and tribunals. Tax matters may arise from registration, filing, assessment, audit, notices, demand orders, penalties, refunds, appeals, and advisory on tax implications.\n" +
                        "The work may include GST registration, GST compliance, filing-related assistance, income tax assessment matters, tax appeals before the Commissioner of Income Tax Appeals, appeals before the Income Tax Appellate Tribunal, GST audits, replies to show-cause notices, and tax advisory.\n",
                        "GST matters are governed by the Central Goods and Services Tax Act, 2017, State GST laws, Integrated GST provisions, rules, circulars, and notifications. Issues may relate to registration, classification, input tax credit, invoicing, returns, e-way bills, assessment, audit, show-cause notices, demand, interest, and penalty.",
                        "Income tax matters are governed by the Income Tax Act, 1961, and related rules. Proceedings may involve scrutiny assessment, reassessment, penalty proceedings, refund claims, demand notices, rectification applications, and appeals.",
                        "Replies to tax notices generally require examination of financial records, returns, invoices, ledgers, contracts, bank statements, and statutory provisions. Appeals require drafting of grounds, statement of facts, compilation of documents, and representation before the appropriate authority or tribunal.\n" +
                        "Tax advisory may involve review of transaction structure, compliance obligations, documentation, and statutory consequences under applicable tax laws.\n",
                    ]}
                />

                <PracticeAreaCard
                    number={"07"}
                    title={"Intellectual Property Rights"}
                    listCol1={[
                        "Trademark registration and protection",
                        "Patent filing and prosecution",
                        "Copyright registration and enforcement",
                        "Domain name registration and disputes",
                        "Trade secret protection"
                    ]}
                    listCol2={[
                        "Licensing and assignment of IP rights",
                        "IP due diligence and valuation",
                        "Infringement litigation",
                        "Anti-counterfeiting measures",
                        "IP strategy and portfolio management"
                    ]}
                    paragraphs={[
                        "This practice area relates to intellectual property rights, including trademarks, copyrights, patents, infringement proceedings, and intellectual property agreements. Intellectual property matters may involve registration, prosecution, opposition, enforcement, licensing, assignment, and dispute resolution.\n",
                        "The work may include trademark search, trademark application, registration, replies to examination reports, opposition matters, copyright registration, patent filing and prosecution, infringement matters, enforcement proceedings, IP licensing agreements, assignment documents, and related filings.\n",
                        "Trademark law is governed by the Trade Marks Act, 1999. Trademark registration may involve search, application, examination, objection, reply, advertisement, opposition, hearing, and registration. Trademark disputes may involve similarity of marks, prior use, passing off, infringement, or unauthorised use.\n",
                        "Copyright law is governed by the Copyright Act, 1957. Copyright matters may relate to literary, artistic, musical, dramatic, cinematographic, sound recording, software, or other protected works. Registration may support proof of ownership and enforcement.\n",
                        "Patent matters are governed by the Patents Act, 1970. Patent filing generally involves technical disclosure, specification, claims, examination, reply to objections, hearing, and grant where requirements are satisfied.\n",
                        "Infringement matters may involve legal notices, civil proceedings, injunctions, damages, account of profits, or settlement documentation. IP agreements may include licensing agreements, assignment deeds, confidentiality agreements, technology transfer agreements, and collaboration documents.\n",
                    ]}
                />

                <PracticeAreaCard
                    number={"08"}
                    title={"Banking, Finance & Recovery"}
                    listCol1={[
                        "Debt recovery suits",
                        "SARFAESI proceedings",
                        "Debt Recovery Tribunal matters",
                        "Loan documentation",
                        "Banking compliance matters",
                    ]}
                    listCol2={[
                        "Cheque bounce cases under Section 138 NI Act",
                        "Recovery proceedings for financial institutions",
                        "Borrower and lender dispute matters",
                        "All other banking, finance, and recovery matters",
                        "Banking disputes",
                    ]}
                    paragraphs={[
                        "This practice area covers banking, finance, and recovery matters before civil courts, Debt Recovery Tribunals, and other appropriate forums. Financial disputes may involve loan defaults, recovery claims, secured assets, banking transactions, dishonoured cheques, borrower disputes, lender disputes, and documentation issues.\n",
                        "The work may include debt recovery suits, SARFAESI proceedings, Debt Recovery Tribunal matters, loan documentation, banking compliance, banking disputes, cheque dishonour cases under Section 138 of the Negotiable Instruments Act, recovery proceedings, and borrower-lender disputes.\n",
                        "Debt recovery matters may involve examination of loan agreements, account statements, sanction letters, security documents, guarantees, demand notices, repayment records, and correspondence between parties. Proceedings may be initiated before civil courts or tribunals depending on the nature of the claim and applicable law.\n",
                        "SARFAESI matters are governed by the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002. Such proceedings may involve demand notice, possession notice, measures by secured creditors, and applications before the Debt Recovery Tribunal.\n",
                        "Cheque bounce matters under Section 138 of the Negotiable Instruments Act require compliance with statutory notice, limitation period, filing of complaint, evidence, and trial procedure.\n" +
                        "Loan documentation may include drafting or review of loan agreements, guarantee deeds, mortgage documents, hypothecation documents, security documents, repayment terms, and default clauses.\n",
                    ]}
                />

                <PracticeAreaCard
                    number={"09"}
                    title={"Cyber Crime & Technology Law"}
                    listCol1={[
                        "Cyber crime litigation",
                        "Data protection and privacy law",
                        "Intellectual property rights",
                        "Technology law and regulation",
                        "All other cyber crime and technology law matters",
                    ]}
                    listCol2={[
                        "Digital forensics and evidence collection",
                        "Cybersecurity compliance",
                        "Online dispute resolution",
                        "E-commerce law",
                        "Artificial intelligence and automation law",
                    ]}
                    paragraphs={[
                        "This practice area relates to cyber crime and technology law matters before appropriate courts, authorities, and forums. Cyber matters may involve digital fraud, unauthorised access, online abuse, defamation, identity misuse, data protection, information technology offences, and electronic evidence.\n",
                        "The work may include cyber fraud complaints, hacking and unauthorised access matters, online defamation, online harassment, data privacy advisory, Digital Personal Data Protection Act compliance, Information Technology Act offences, digital evidence handling, and cyber complaint drafting.\n",
                        "Cyber fraud may involve phishing, unauthorised transactions, fake profiles, identity theft, online financial fraud, investment scams, impersonation, misuse of personal information, or unauthorised access to accounts and systems. Such matters may require prompt preservation of digital records and filing of complaints before appropriate authorities.\n",
                        "Online defamation or abuse may involve social media posts, electronic messages, threats, harassment, publication of false material, or reputational harm through digital platforms. Remedies may depend on whether the matter gives rise to civil, criminal, or platform-based action.\n",
                        "Digital evidence may include screenshots, emails, chats, call records, metadata, transaction records, server information, device records, or electronic documents. Admissibility may require compliance with applicable evidentiary requirements, including certification where required.\n",
                        "Data protection matters may involve consent, collection, processing, storage, transfer, breach reporting, privacy notices, and obligations under applicable data protection law.\n",
                    ]}

                />

                <PracticeAreaCard
                    number="03"
                    title="Consumer Protection Law"
                    listCol1={["Filing consumer complaints", "Defending consumer disputes", "Defective goods cases", "Deficient service matters", "Unfair trade practice disputes"]}
                    listCol2={["Misleading advertisement cases", "Product liability matters", "Defective goods cases", "Consumer appeals before higher commissions", "All other consumer protection law matters"]}
                    paragraphs={[
                        "This practice area covers consumer protection matters before District, State, and National Consumer Disputes Redressal Commissions. Consumer disputes may arise from defective goods, deficient services, unfair trade practices, misleading advertisements, product liability, refund claims, compensation claims, or disputes between consumers and service providers.",
                        "The work may include filing and defending consumer complaints, defective goods cases, deficient service matters, unfair trade practice disputes, misleading advertisement cases, product liability matters, refund and compensation claims, appeals before higher commissions, and related proceedings.",
                        "Consumer disputes are governed by the Consumer Protection Act, 2019, and related rules. A complaint may seek refund, replacement, compensation, removal of defect, correction of deficiency, discontinuance of unfair practice, or other relief available under law.\n" +
                        "Proceedings generally involve filing of complaint, reply by the opposite party, submission of documents, evidence by affidavit, arguments, and final order. Appeals may be filed before higher commissions within the prescribed period.\n",
                        "Relevant documents may include invoices, receipts, warranty cards, service records, correspondence, photographs, expert reports, payment records, policy documents, contracts, and notices. Jurisdiction depends on the value of goods or services, compensation claimed, territorial jurisdiction, and applicable statutory provisions.\n",
                        "Consumer matters may involve sectors such as banking, insurance, real estate, medical services, education, e-commerce, transport, utilities, defective products, or other services.",
                    ]}
                />

                <PracticeAreaCard
                    number="04"
                    title="Constitutional Law & Public Interest Litigation"
                    listCol1={[
                        "Writ petitions before the High Court",
                        "Writ petitions before the Supreme Court",
                        "Public Interest Litigation matters",
                        "Enforcement of fundamental rights",
                        "Challenge to government actions",
                    ]}
                    listCol2={[
                        "Challenge to validity of laws",
                        "Administrative law matters",
                        "Petitions seeking directions against public authorities",
                        "Filing of affidavits and constitutional pleadings",
                        "All other constitutional law and PIL matters",
                    ]}
                    paragraphs={[
                        "This practice area relates to constitutional law and Public Interest Litigation before the High Court and the Supreme Court of India. Constitutional matters may involve fundamental rights, legal rights, public duties, administrative actions, statutory powers, government decisions, or issues affecting the public.",
                        "The work may include writ petitions, Public Interest Litigation, enforcement of fundamental rights, challenges to government actions, challenges to validity of laws, administrative law matters, petitions seeking directions against public authorities, affidavits, and constitutional pleadings.",
                        "Writ petitions before the High Court are generally filed under Article 226 of the Constitution of India. Petitions before the Supreme Court may be filed under Article 32 in matters involving enforcement of fundamental rights. Writ remedies may include mandamus, certiorari, prohibition, habeas corpus, or quo warranto depending on the facts and relief sought.",
                        "Public Interest Litigation may be filed in matters involving public injury, public duty, constitutional concerns, or issues affecting a larger section of society. Such petitions require proper facts, supporting documents, legal grounds, and bona fide public interest.\n" +
                        "Constitutional matters may involve examination of maintainability, alternative remedy, locus standi, delay, jurisdiction, statutory framework, administrative record, and applicable constitutional provisions.\n",
                        "Proceedings may require drafting of writ petitions, affidavits, rejoinders, interim applications, written submissions, and compilation of supporting documents.",
                    ]}
                />

                <PracticeAreaCard
                    number={"05"}
                    title={"Service & Employment Law"}
                    listCol1={[
                        "Government service matters",
                        "Public sector employment disputes",
                        "Disciplinary action cases",
                        "Promotion-related disputes",
                        "Pay fixation matters",

                    ]}
                    listCol2={[
                        "Pension-related disputes",
                        "Industrial disputes",
                        "Labour law compliance",
                        "Employer-employee dispute matters",
                        "All other service and employment law matters",
                        "Retirement benefit claims",
                    ]}
                    paragraphs={[
                        "This practice area relates to service and employment law matters before administrative tribunals, labour courts, civil courts, the High Court, and other appropriate forums. Employment and service disputes may arise between employees and employers, government servants and departments, public sector employees and authorities, or workmen and management.",
                        "The work may include government service matters, public sector employment disputes, disciplinary action cases, promotion disputes, pay fixation, retirement benefits, pension disputes, industrial disputes, labour law compliance, employer-employee disputes, and related proceedings.",
                        "Government service matters may involve appointment, promotion, seniority, transfer, suspension, disciplinary inquiry, dismissal, removal, compulsory retirement, pay scale, pension, gratuity, and other service benefits. Such matters may be governed by service rules, statutory regulations, administrative instructions, and constitutional principles.",
                        "Labour and employment disputes may involve termination, retrenchment, non-payment of wages, workplace misconduct, employment contracts, disciplinary action, industrial disputes, standing orders, and compliance with labour laws.\n" +
                        "Proceedings may require drafting of representations, applications, replies, statements of claim, written statements, affidavits, evidence, appeals, or writ petitions depending on the forum and nature of the dispute.\n",
                        "Labour and employment disputes may involve termination, retrenchment, non-payment of wages, workplace misconduct, employment contracts, disciplinary action, industrial disputes, standing orders, and compliance with labour laws.\n" +
                        "Proceedings may require drafting of representations, applications, replies, statements of claim, written statements, affidavits, evidence, appeals, or writ petitions depending on the forum and nature of the dispute.\n",
                    ]}
                />

                <PracticeAreaCard
                    number={"06"}
                    title={"Legal Drafting, Notices & Petition Preparation"}
                    listCol1={[
                        "Legal notices drafting",
                        "Drafting replies to legal notices",
                        "Petition preparation",
                        "Preparation of plaints and written statements",
                        "Drafting affidavits and applications",
                        "Drafting complaints and representations",
                    ]}
                    listCol2={[
                        "Drafting writ petitions",
                        "Drafting agreements, deeds, and undertakings",
                        "Drafting settlement documents",
                        "Review and vetting of legal documents",
                        "All other types of legal drafting matters",
                        "Drafting appeals and revisions",
                    ]}
                    paragraphs={[
                        "This practice area covers legal drafting, notices, petition preparation, and review of legal documents. Drafting may be required in civil, criminal, family, property, corporate, service, consumer, tax, banking, constitutional, RTI, and other legal matters.\n" +
                        "The work may include drafting of legal notices, replies to notices, petitions, plaints, written statements, affidavits, applications, complaints, representations, appeals, revisions, writ petitions, agreements, deeds, undertakings, settlement documents, and review or vetting of legal documents.\n",
                        "This practice area covers legal drafting, notices, petition preparation, and review of legal documents. Drafting may be required in civil, criminal, family, property, corporate, service, consumer, tax, banking, constitutional, RTI, and other legal matters.\n" +
                        "The work may include drafting of legal notices, replies to notices, petitions, plaints, written statements, affidavits, applications, complaints, representations, appeals, revisions, writ petitions, agreements, deeds, undertakings, settlement documents, and review or vetting of legal documents.\n",
                        "Petitions and pleadings may require statement of facts, jurisdiction, limitation, cause of action, grounds, interim reliefs, final reliefs, verification, affidavits, and supporting documents. Drafting requirements vary depending on the court, tribunal, authority, or forum before which the document is filed.",
                        "Agreements and deeds may require identification of parties, subject matter, obligations, consideration, duration, termination, dispute resolution, governing law, execution clauses, stamp duty, and registration requirements where applicable.\n" +
                        "Document review may involve examination of legal risks, unclear clauses, missing terms, procedural defects, or inconsistency with applicable law.\n",
                    ]}
                />
            </div>
        </section>
    );
};

export default PracticeAreasContent;
