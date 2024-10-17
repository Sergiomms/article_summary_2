import { useEffect, useRef } from 'react'
import './Texts.css'

export default function Texts({ savedNumber }) {

  const array1to60 = [
    {
      id: 1,
      title: `. Litzow MR, Sun Z, Mattison RJ, et al. Blinatumomab for MRD-Negative Acute Lymphoblastic
Leukemia in Adults. N Engl J Med. 2024;391(4):320-333.`,
      resume: `Background: Many older adults with B-cell precursor acute lymphoblastic leukemia (BCP-ALL) have a relapse
despite having a measurable residual disease (MRD)-negative complete remission with combination chemotherapy.
The addition of blinatumomab, a bispecific T-cell engager molecule that is approved for the treatment of relapsed, refractory,
and MRD-positive BCP-ALL, may have efficacy in patients with MRD-negative remission. Methods: In a phase
3 trial, we randomly assigned patients 30 to 70 years of age with BCR::ABL1-negative BCP-ALL (with :: indicating
fusion) who had MRD-negative remission (defined as <0.01% leukemic cells in bone marrow as assessed on flow
cytometry) after induction and intensification chemotherapy to receive four cycles of blinatumomab in addition to four
cycles of consolidation chemotherapy or to receive four cycles of consolidation chemotherapy alone. The primary end
point was overall survival, and relapse-free survival was a secondary end point. Results: The data and safety monitoring
committee reviewed the results from the third efficacy interim analysis and recommended that they be reported. Complete
remission with or without full count recovery was observed in 395 of 488 enrolled patients (81%). Of the 224 patients
with MRD-negative status, 112 were assigned to each group. The characteristics of the patients were balanced
between the groups. At a median follow-up of 43 months, an advantage was observed in the blinatumomab group as
compared with the chemotherapy-only group with regard to overall survival (at 3 years: 85% vs. 68%; hazard ratio for
death, 0.41; 95% confidence interval [CI], 0.23 to 0.73; P = 0.002), and the 3-year relapse-free survival was 80%
with blinatumomab and 64% with chemotherapy alone (hazard ratio for relapse or death, 0.53; 95% CI, 0.32 to 0.87).
A higher incidence of neuropsychiatric events was reported in the blinatumomab group than in the chemotherapy-only
group. Conclusions: The addition of blinatumomab to consolidation chemotherapy in adult patients in MRD-negative
remission from BCP-ALL significantly improved overall survival. (Funded by the National Institutes of Health and others;
E1910 ClinicalTrials.gov number, NCT02003222.). Copyright © 2024 Massachusetts Medical Society.`
    },
    {
      id: 2,
      title: `. Foà R, Bassan R, Elia L, et al. Long-Term Results of the Dasatinib-Blinatumomab Protocol
for Adult Philadelphia-Positive ALL. J Clin Oncol. 2024;42(8):881-885`,
      resume: `Clinical trials frequently include multiple end points that mature at different times. The initial report, typically
based on the primary end point, may be published when key planned coprimary or secondary analyses are not
yet available. Clinical trial updates provide an opportunity to disseminate additional results from studies, published
in JCO or elsewhere, for which the primary end point has already been reported.We report the long-term results of
the frontline trial with dasatinib and blinatumomab in induction/consolidation (GIMEMA LAL2116, D-ALBA) for adult
Philadelphia-positive ALL (Ph+ ALL), which enrolled 63 patients of all ages. At a median follow-up of 53 months,
disease-free survival, overall survival, and event-free survival are 75.8%, 80.7%, and 74.6%, respectively. No events
have occurred among early molecular responders. A significantly worse outcome was recorded for IKZF1plus patients.
Twenty-nine patients-93.1% being in molecular response (ie, complete molecular response or positive nonquantifiable)
after dasatinib/blinatumomab-never received chemotherapy/transplant and continued with a tyrosine kinase inhibitor
only; 28 patients remain in long-term complete hematologic response (CHR). An allogeneic transplant was carried out
in first CHR mainly in patients with persistent minimal residual disease; 83.3% of patients are in continuous CHR. The
transplant-related mortality was 12.5% for patients transplanted in first CHR and 13.7% overall. Nine relapses and six
deaths have occurred. ABL1 mutations were found in seven cases. The final analysis of the D-ALBA study shows that a
chemotherapy-free induction/consolidation regimen on the basis of a targeted strategy (dasatinib) and immunotherapy
(blinatumomab) is effective in inducing durable long-term hematologic and molecular responses in adult Ph+ ALL,
paving the way for a new era in the management of these patients.`
    },
    {
      id: 3,
      title: `. Chiaretti S, Della Starza I, Santoro A, et al. Sequential chemotherapy and blinatumomab
to improve minimal residual disease in adult ph- B-lineage acute lymphoblastic
leukemia. final results of the phase II Gimema LAL2317 trial. Blood. 2023;142:826.`,
      resume: `Introduction. The outcome of adult patients with acute lymphoblastic leukemia (ALL) has markedly improved
following the introduction of a pediatric inspired chemotherapy backbone coupled with minimal residual disease (MRD)
monitoring at well-defined timepoints (TP), translating into a rational patients’ stratification for allogeneic transplantation
(Tx). Immunotherapy, in particular blinatumomab, represents a further advancement in the management of ALL. We
designed a phase II trial (GIMEMA LAL2317) for adult Ph- CD19+ B-lineage ALL (Ph- B-ALL) consisting of a pediatric
chemotherapy backbone - with dose adjustment in patients >55 years - to which 2 cycles of blinatumomab were added,
the first after early consolidation cycle 3 (high-dose methotrexate and Ara-C) and the second after late consolidation
cycle 6. Tx allocation was based on MRD assessment, carried out in most cases by RQ-PCR and by flow cytometry
when a sensitive molecular marker was not identified. The primary objective of the trial was to assess the impact of blinatumomab
in increasing the rate of early MRD negativity at end of week 14 (TP3). Patients and methods. The protocol
was designed for adults up to the age of 65 years with newly diagnosed Ph- B-ALL; 149 patients were enrolled. Median
age was 41 years (18-65), with 28 patients (19%) being older than 55. Eighty-one patients were males, and the
median white blood count (WBC) was 4.5x10 9/l (1-474); 12 cases harbored the KMT2A rearrangement, 5 the TCF3::
PBX1 transcript and 31 were classified as Ph-like according to the BCR/ABL1-like predictor . The median follow-up
is 37.5 months (0.55-62.8) Results. At the end of induction (TP1, after cycles 1 and 2), 131 patients (88%) were in
complete remission (CR), with a significant difference according to age: 94%, 92% and 64% in the 18-40, 40.55 and
>55 years cohorts, respectively (p<0.001). All patients with KMT2A and TCF3::PBX1 rearrangements achieved a CR,
while 5 Ph-like patients did not. At TP2, i.e. after early consolidation, 85 patients (70%) became MRD-negative (MRD
neg). TP3, after the 1 st blinatumomab cycle, 102 patients were MRD neg; the rate of MRD negativity increased to
93% (p<0.001). Imposable results were obtained considering only paired MRD samples. Eight patients remained MRD
pos, including 4 with a KMT2A rearrangement and 1 with a E2A::PBX1 rearrangement. OS and DFS at 36 months are
71% and 66% on the whole cohort. OS was significantly different (p=0.00013) according to age cohorts: 76%, 74%
and 49% for patients aged 18-40, 40-55 and >55 years, respectively. Likewise, DFS was 71%, 62% and 42% for the
same age cohorts, without reaching statistical significance. When patients were stratified for TP2 MRD, OS and DFS
were significantly better for MRD neg vs MRD pos cases (p=0.0006 and p<0.0001, respectively). At variance, at TP3,
with the caveat of the small sample size of MRD pos patients, the differences between MRD neg and MRD pos patients
at TP3 were abolished: indeed, OS and DFS were 82% and 68% for MRD neg, 80% and 70% for MRD pos and 88%
and 72% for those lacking MRD evaluation (Figure). Finally, 30 relapses have so far occurred, including 10 Ph-like, 1
KMT2A and 3 TCF3::PBX1 rearranged cases. The overall cumulative incidence of relapse (CIR) was 27.5%; of note,
within TP3 MRD neg patients CIR was 42.5% in Ph-like cases vs 17.5% in the remaining patients. By univariate analysis,
significant factors for OS were age (p<0.001), CR achievement (p<0.001) and TP2 MRD (p=0.002); TP2 MRD
retained significance in multivariate analysis (p=0.001). Univariate analysis for DFS showed as significant the Ph-like
signature (p=0.026) and TP2 MRD (p<0.001); both retained statistical significance in multivariate analysis (p=0.021
and <0.001, respectively). Toxicity details will be provided. Conclusions. This phase II trial shows the benefit of adding
blinatumomab for the management of Ph- B-ALL, with the primary objective being achieved with 93% of patients being
MRD neg after the 1 st cycle of blinatumomab. With a median follow-up of 37.5 months, OS and DFS are 71% and
66%, respectively, better than in historical results, particularly in patients up to the age of 55. Importantly, at TP3 the
MRD status no longer impacted, highlighting the therapeutic role of blinatumomab, as observed in Ph+ ALL. Finally,
the Ph-like signature retains its negative prognostic impact, suggesting that a combination strategy, similar to that in
place for Ph+ ALL, is required.`
    },
    {
      id: 4,
      title: `. Senapati J, Jabbour E, Short NJ, et al. Impact of high-risk cytogenetics (HR-CTG) on
the outcome of newly diagnosed adult patients with philadelphia negative B-cell acute
lymphoblastic leukemia (B-ALL) treated with frontline blinatumomab (blina) and/or inotuzumab
ozogamicin (ino) containing hypercvad (HCVAD) therapy. Blood. 2023;142:1500.`,
      resume: `Introduction: HR-CTG in B-ALL is considered an adverse prognostic factor along with age and measurable
residual disease (MRD) status. The use of potent B-cell targeted drugs like InO and Blina as part of frontline therapy
has improved outcomes in adult pts with B-ALL ( Jabbour et al, Lancet Haematology 2022 and 2023) but the impact
of baseline HR-CTG needs to be further elucidated. Methods: From Oct 2014-Feb 2023 we identified 71 consecutive
patients (pts) with Philadelphia (Ph)-negative B-ALL and adequate CTG data who were treated on frontline therapy
that included InO and/or Blina along with HCVAD chemotherapy. The intensive phase of treatment protocol consisted
of HCVAD 4 courses followed by 4 courses of blina which could be initiated post HCVAD course 2 for high-risk or
MRD positive pts and has been published before (Jabbour et al, Lancet Haematology 2022). The protocol was later
amended to include fractionated InO from course 2 of HCVAD at a cumulative dose of 2.4 mg/m 2 (Short et al, ASCO
2023). Pts with confirmed Ph-like ALL were excluded. CTG was evaluated and graded as HR based on a combination
of conventional karyotyping and fluorescent in situ hybridization data and included low-hypoploidy or near triploidy (Ho-
Tr), complex karyotype (CK; ≥5 abnormalities), 14q32 rearrangement ( IGH) and KMT2A re-arrangement as described
before (Issa et al, Cancer 2017). Results: 31 of 71 pts (44%) with Ph- B-ALL had HR-CTG; 14 pts (45%) with Ho-Tr,
8 (26%) pts with KMT2A rearrangement, 6 pts (19%) with CK and 3 pts (10%) with IGH rearrangement (Table 1). The
median age of the whole cohort was 33 years (range, 18-60 years); median age was 29 yrs in HR-CTG group compared
to 34 yrs in non-HR-CTG group. 12 pts (39%) in the HR group compared to 5 pts (12%) in the non-HR group
had a TP53 mutation ( p=0.01). 5/12 (42%) pts in the HR group with TP53 mutation had low-hypoploidy. 7 pts (23%)
and 13 (32%) pts in the HR-CTG and non-HR-CTG group respectively had RAS mutations, with 1 pt in each group
having both TP53 and RAS mutation. 17 pts (55%) received Blina and 14 pts (45%) received both InO and Blina in the
HR group compared to 20 pts (50%) each who received Blina and Blina+ InO in the non-HR group. A best response
of complete remission (CR)/CR with incomplete count recovery (CRi) was obtained in 100% pts (CR=30, CRi=1) in the
HR-CTG group, 17 (55%) of whom had concurrent MRD negativity; in the non-HR-CTG group 39 pts (98%) attained
CR and one pt a partial remission, with concurrent MRD negativity attained in 21/39 (54%) pts with CR. At a median
follow-up of 31 months (mos) for the full cohort (43 mos for HR pts and 28 mos for the non-HR group) the median
overall survival (OS) was not reached (NR) and 3-yr OS was 85% (95% CI, 78-92%); median OS and 3-yr OS were
NR and 89% in the HR-CTG group and 74.7 mos and 82% in the non-HR-CTG group ( p=0.64). The median relapse
free survival (RFS) was NR in the HR-CTG group and 74 mos in the non-HR group ( p=0.73) while the 3-yr RFS were
74% and 80% respectively. There was no intergroup difference in RFS and OS based on the MRD status at response
assessment. 11 HR-CTG pts (35%) underwent allogeneic stem cell transplantation (SCT) (5 Ho-Tr, 4 KMT2Ar, 1 CK, 1
IGHr) in continued remission at a median of 4.8 mos from therapy initiation (IQR 4.5-8.2 mos), 9 of whom went directly
to SCT without introduction of a new therapy between the frontline therapy and SCT. Two pts received additional lines
of therapy for MRD relapse/progression without morphological relapse before SCT. The 3-year OS in the HR-CTG pts
who underwent SCT was 87% and similar to HR pts who did not undergo SCT (89%, p=0.78). 5 pts (12%) underwent
SCT in the non-HR-CTG group, 4 for persistent or recurrent MRD positivity and one with Down’s syndrome. No pts in
either groups developed hepatic sinusoidal obstruction syndrome or a secondary myeloid neoplasm. Conclusion: In our
analysis, in a prospectively maintained dataset where >90%pts were treated on clinical trial, HR-CTG did not have any
significant impact on B-ALL survival outcomes when treated with frontline therapy containing B-cell targeted agents.
Further analysis is underway.`
    },
    {
      id: 5,
      title: `. Zhang T, Zhu K, Zihong C, Lin R, Liu Q, Zhou H. Frontline combination of 3 rd generation
TKI olverembatinib and blinatumomab for Ph+/Ph-like ALL patients. Blood. 2023;142:1504`,
      resume: `Background: The combination of dasatinib and blinatumomab represented a chemotherapy-free treatment
approach, which had been employed in the management of newly diagnosed Philadelphia chromosome-positive acute
lymphoblastic leukemia (ALL). A recent study demonstrated that combination therapy of ponatinib with blinatumomab
may achieve better efficacy, with a complete molecular response (CMR) rate of 87%. However, some patients required
dose reduction or even discontinuation of ponatinib for the occurrence of cardiovascular adverse events. Olverembatinib,
a potent third-generation tyrosine kinase inhibitor (TKI), showed both favorable tolerability and significant efficacy
in patients with TKI-resistant chronic myeloid leukemia. But its effectiveness in ALL remained unaddressed. Our recent
study, a frontline combination of Olverembatinib and PDT-ALL-2016 regime in Ph+ALL, had shown a promising
outcome, achieving a complete molecular response (CMR) rate of 84.6% at day 90. Herein, we explored the clinical
efficacy of the frontline combination of Olverembatinib and blinatumomab for the treatment of Ph+ and ABL-class Phlike
ALL. Methods: From April 2022 to May 2023, 13 patients with Ph+/Ph-like ALL treated with olverembatinib (40mg
once every other day) and blinatumomab (administered for a total of 2 weeks followed by 2 weeks of break) were enrolled
(Figure 1a). Two patients (15.4%, 2/13) were in Ph-like ALL group with TEL-ABL and EBF1-PDGFRB fusion gene.
Five patients (38.5%, 5/13), with a median age of 58 years old, were received ≥2 cycles and eight patients (61.5%,
8/13), with a median age of 34.5 years old, were treated with 1 cycle before HSCT. Result: With a median follow-up
of 7 months, all patients (100%, 13/13) achieved complete remission (CR) after one cycle of treatment. Among them,
nine patients (72.7%, 9/13) achieved complete molecular remission (CMR) after one cycle, and ten patients (90.1%,
10/13) after two cycles. Notably, all patients (100%, 13/13) achieved CMR within three months of olverembatinib and
blinatumomab treatment (Figure 1b). The 6-month overall survival (OS) rate was 100% and the 6-month event-free
survival (EFS) rate was 87.5% (Figure 1 c and d). One patient with ABL mutation EE255V died due to relapse after
HSCT. The regimen was overall well tolerated. For hematologic toxicity, one patient (7.7%, 1/13) experienced grade
1 neutrophil decrease. Regarding non-hematologic toxicity, five patients (38.4%, 5/13) developed infections during
treatment, including COVID-19 and herpes zoster. Five patients (38.4%, 5/13) experienced decreased levels of immunoglobulins.
Ten patients (76.9%, 10/13) experienced grade 1 cytokine release syndrome (CRS). Importantly, there
were no interruptions in dosing of olverembatinib during treatment while no cardiovascular adverse events were observed.
Conclusion: This is the first report on the combination of olverembatinib with blinatumomab for the treatment of
Ph+/Ph-like ALL. Among the 13 patients enrolled, a notable rate of CR and CMR was observed, which holds promise
for improved long-term survival. Additionally, the combination of olverembatinib and blinatumomab exhibited minimal
adverse events, both in terms of hematologic and non-hematologic toxicities. Notably, fewer cardiovascular adverse
events that required discontinuation of treatment compared to ponatinib were observed. Altogether, these findings
strongly indicated that combination therapy of olverembatinib with blinatumomab has the potential to become a new
standard of care in the frontline treatment of Ph+/Ph-like ALL. However, further clinical trials are needed to definitively
establish the efficacy of this treatment approach and validate the potential benefits. This research was supported by
the National Natural Science Foundation of China(NFSC82170163, 81970147), Clinical Study of Nanfang Hospital(LC2016ZD009/
2019CR012).`
    },
    {
      id: 6,
      title: `. Geyer MB, Mascarenhas J, Smith M, et al. Chemotherapy-sparing induction followed
by consolidation and maintenance with blinatumomab and concurrent oral tyrosine kinase
inhibitor therapy for newly-diagnosed philadelphia chromosome-positive acute
lymphoblastic leukemia: Primary endpoint results from the blissphall study. Blood.
2023;142:1510.`,
      resume: `Background: Oral ABL-targeted kinase inhibitors (TKIs) have transformed treatment of BCR::ABL+ (Philadelphia
chromosome-positive, Ph+) acute lymphoblastic leukemia (ALL). Induction (IND) w/ corticosteroids (CS) and
dasatinib (DAS) alone results in morphologic complete response (mCR) rates approaching 100% but low rates of measurable
residual disease (MRD) negativity; addition of intensive chemotherapy to TKIs adds risks of myelosuppression.
DAS + the CD3/CD19 bispecific T-cell engager blinatumomab (BLIN) is effective consolidation (CONSOL) for Ph+ ALL,
though ABL kinase mutations conferring resistance can arise early in therapy (Foà, NEJM, 2020). We designed a phase
II study of BLIN as part of a chemotherapy sparing strategy in pts w/ Ph+ ALL (BLISSPHALL), introducing BLIN as early
as 6 weeks into treatment for pts in mCR, w/ aim of expediting MRD clearance and suppressing resistant clones early in
disease course, and including a maintenance (MAINT) phase of BLIN + TKI for pts in molecular response. Methods: We
conducted a multicenter trial of TKI + CS IND and TKI + BLIN CONSOL + MAINT in adults (≥18 yrs) w/ newly-diagnosed
(ND) Ph+ ALL (NCT04329325). Study schema is depicted in Figure 1. Pts received CS pre-phase w/ prednisone (PRED)
or dexamethasone (DEX) followed by modified GIMEMA LAL1205 IND (DEX + DAS 140 mg/d w/ DAS dose adjustments
or TKI change per protocol) w/ intrathecal methotrexate (IT MTX) d22, 43 and bone marrow (BM) MRD assessments
including FACS and BCR::ABL1 PCR. Pts in mCR on d43 could proceed to CONSOL w/ 3 cycles (C) of TKI + BLIN 28
mcg/d IVCI, d1-28, w/ 14d off BLIN between cycles and BM MRD assessment/IT MTX after each cycle. TKI was given
continuously including between BLIN cycles. Pts in protocol-defined complete molecular response (CMR; MRD negative
by FACS and no detectable BCR::ABL1 transcripts) after CONSOL could proceed to MAINT (C4-7 BLIN + TKI, 28d off
between cycles). The primary objective is to determine the proportion of evaluable pts achieving CMR by the end of
CONSOL (≤ 3C BLIN + TKI). Secondary objectives include safety/toxicity of BLIN + DAS, duration of CMR, incidence of
relapse, event-free/overall survival. Toxicities were defined by CTCAE v5.0. Results: 17 pts enrolled (12 women, 5 men)
w/ median age 50 yrs (range 22-87); BCR::ABL1 transcript type p190 (n=15) or p210 (n=2). Median follow-up 11.7
months (range 3-24). All began DAS 140 mg/d as initial TKI; 4 changed TKI for DAS intolerance per protocol (bosutinib,
n=2; ponatinib [PON], n=2) and remained on study; TKI was changed to PON in 1 other pt to optimize BCR::ABL1
transcript suppression pre-allogeneic transplant (alloHCT) and that pt was withdrawn from study. Two had interruption
or delay of BLIN due to toxicity (grade [G] 3 transaminase elevation, n=1; G2 cytokine release syndrome, n=1); BLIN
was resumed in both. Figure 2 lists nonhematologic adverse effects (AEs) seen in ≥2 pts at least possibly related to
TKI or BLIN while on study. One pt developed G3 pancreatitis after DAS was changed to PON; TKI was changed back
to DAS. There were no G4-5 AEs. All pts (100%) achieved mCR during IND (median d22). Ten achieved CMR to date (5
during IND, 5 during CONSOL) and 6 did not achieve CMR; determination pending in 1 pt. By FACS, 16/17 achieved BM
MRD negativity; 13/14 evaluable pts had no evidence of malignant clonal IgH rearrangement (IgHR) by next generation
sequencing (NGS). Notably, 3 pts w/ persistent low-level BCR::ABL1 transcripts had no evidence of malignant clonal
IgHR by NGS but were withdrawn post-CONSOL as protocol required BCR::ABL1 PCR negativity to proceed to MAINT.
Two pts relapsed, both after achieving CMR (one declined CONSOL and self-discontinued TKI; one had extramedullary
(EM) relapse w/ ABL T315I mutation). Four pts underwent alloHCT in CR1 (rising MRD levels on study leading to change
in therapy, n=1; persistent BCR::ABL1 PCR positivity, n=2; IKZF1 plus phenotype, n=1); one underwent alloHCT in CR2
following EM relapse. Conclusions: DAS + CS IND w/ addition of BLIN to TKI in mCR leads to high rates of deep molecular
response w/ low risk of early relapse and low rates of severe regimen-related toxicity in pts w/ ND Ph+ ALL. Use of
PON (vs DAS) as initial TKI w/ BLIN may further suppress resistant clones. Further f/u is needed to confirm durability of
CMR w/ BLIN + TKI CONSOL ± MAINT in absence of alloHCT and whether pts w/ persistent BCR::ABL1 PCR positivity
and no malignant clonal IgHR by NGS exhibit similar outcomes to those in CMR.`
    },
    {
      id: 7,
      title: `. Haddad FG, Jabbour E, Short NJ, et al. Chemotherapy-free combination of blinatumomab
and ponatinib in adults with newly diagnosed philadelphia chromosome-positive
acute lymphoblastic leukemia: Updates from a phase II trial. Blood. 2023;142:2827.`,
      resume: `Background: Blinatumomab and ponatinib demonstrated efficacy in patients with Philadelphia chromosome
(Ph)-positive acute lymphoblastic leukemia (ALL). A chemotherapy-free regimen combining both drugs in the frontline
setting may mitigate the risk of toxicities and the need for hematopoietic stem cell transplantation (HSCT). Methods: In
this phase II trial, patients ≥18 years of age with newly diagnosed Ph-positive ALL were eligible. They were required to
have a performance status of ≤2, total bilirubin ≤2x the upper limit of normal (ULN), and ALT/AST ≤3x the ULN. Patients
with uncontrolled cardiovascular disease or clinically significant central nervous system (CNS) comorbidities (except
for CNS leukemia) were excluded. Patients received up to 5 cycles of blinatumomab in combination with ponatinib,
followed by ponatinib maintenance for ≥5 years. Ponatinib 30mg daily was given during Cycle 1 and decreased to
15mg daily once a complete molecular response (CMR) was achieved. Patients also received 12 doses of prophylactic
intrathecal (IT) chemotherapy with alternating cytarabine and methotrexate. The primary endpoint was the CMR rate.
Secondary endpoints included response rates, safety measures, event-free survival (EFS), and overall survival (OS).
Results: Between June 2018 and May 2023, 62 pts with newly diagnosed Ph-positive ALL were treated. Baseline characteristics
are shown in Table 1. Twenty-two patients were in complete remission (CR) at the start of therapy. Among 40
patients evaluable for hematologic response, 39 (98%) achieved CR/CRi; 1 patient had early death. Among 55 patients
evaluable for molecular response, 37 (67%) achieved CMR after 1 cycle, and 46 (84%) achieved CMR at any time. Forty-
seven patients were evaluated for measurable residual disease (MRD) by next-generation sequencing at a sensitivity
level of 10 -6, of whom 43 (91%) were found to have negative MRD. Five of these patients with undetectable MRD by
NGS had low-level BCR:ABL1 transcripts detected by PCR at the same time (ranging from 0.01% to 1.23% IS). Four of
them had p190 transcript and one had p210. The median follow-up was 17 months (range, 2-61 months). Six patients
(10%) relapsed after a median of 21 months of remission (range, 8-24 months): two relapsed in the bone marrow (one
with acquired E225V mutation), one had an extramedullary-only relapse (Ph-negative and MYC-rearranged relapse),
and three had a CNS-only relapse (after 20, 22, and 23 months). Four patients died (one from intracranial hemorrhage,
one from post-procedural hemorrhage, one from brain aneurysm, and one following CNS relapse with intracranial
edema and septic shock). One leukemia-related death occurred on study; the estimated 2-year EFS and OS rates
were 77% and 89%, respectively (Figure 1). Only one patient underwent HSCT in first CR due to persistently low-level
BCR:ABL1 positivity. Among the 52 patients in ongoing remission without HSCT, the median duration of response was
16 months (range, 2-61). Most adverse events were grade 1-2 and were consistent with the known toxicity profile of
the two agents. Ponatinib was discontinued in two patients due to possibly related adverse events (cerebrovascular
accident and coronary artery stenosis in one patient each). Conclusions: The chemotherapy-free combination of blinatumomab
and ponatinib is safe and effective in newly diagnosed Ph-positive ALL, with high rates of MRD negativity.
Encouraging duration of remission and OS has been observed without the need for HSCT.`
    },
    {
      id: 8,
      title: `. Chiaretti S, Leoncin M, Elia L, et al. Comparison between dasatinib-blinatumomab vs
ponatinib-blinatumomab chemo-free strategy for newly diagnosed ph+ acute lymphoblastic
leukemia patients. preliminary results of the Gimema ALLL2820 trial. Blood.
2023;142:4249.`,
      resume: `Introduction. The outcome of Philadelphia positive acute lymphoblastic leukemia (Ph+ ALL) has dramatically
improved in the last decade, due with the introduction in the clinical practice of tyrosine kinase inhibitors (TKIs). A
further improvement has been obtained with the use of blinatumomab as a consolidation strategy in newly diagnosed
patients. We previously designed an induction/consolidation chemotherapy-free frontline trial with dasatinib followed
by blinatumomab (GIMEMA LAL2116, D-ALBA); the preliminary results showed that after 2 cycles of blinatumomab
(primary endpoint), molecular responses were achieved in 60% of cases and that, with a median follow-up of 18
months, overall survival (OS) and disease (DFS) were 95% and 88% (Foà et al, NEJM 2020). An updated follow-up at
53 months (Foà et al, under revision and ASH 2023) confirmed the favorable long-term outcomes with OS and DFS of
75.8% and 80.7%, respectively. A total of 9 relapses occurred. The median time to relapse was 4.4 months (1.9-25.8);
4 were at the central nervous system (CNS). To further improve the outcome of these patients, we designed a phase
III trial (GIMEMA ALL2820) in which in the experimental arm dasatinib was substituted with ponatinib, followed - in
the consolidation phase - by at least 2 cycles of blinatumomab. The trial is currently enrolling. Aims. To compare the
efficacy of the combination of ponatinib followed by blinatumomab with that reported with dasatinib followed by blinatumomab
for the management of newly diagnosed adult Ph+ ALL patients. Patients and Methods. From September
2021 to July 2023, 74 patients have been enrolled in the experimental arm, based on ponatinib followed by at least
2 cycles of blinatumomab; the induction period has been reduced from 85 to 70 days and the dose of ponatinib was
either 45 mg or 30 mg, according to patient’s age. A dose reduction to 30 mg was foreseen by day 28 of induction,
regardless of age, to avoid unacceptable toxicities. Furthermore, CNS prophylaxis was strengthened with a total of 15
medicated lumbar punctures and triple intrathecal therapy (methotrexate, aracytin and steroids) was administered.
Finally, transplant allocation was not left to investigator’s choice, but it was established according to biological features
(minimal residual disease and presence of the IKZF1 plu s genotype). Results. Median age was 57 years (range 20-80),
with 31% of patients being older than 65 years; 51% were males, the median white blood count (WBC) was 12 x10 9/l
(1-207 x10 9/l). The p190 fusion protein was detected in 75.6% of cases, the p210 in 21.6% and p190/p210 in 2.7%.
The IKZF1 plus genotype was detected in 33% of cases. The median follow-up is 6.1 months (0 - 20.3). Of the 74 patients
enrolled, 16 were still receiving induction treatment and have therefore been excluded from the present analysis,
and 40 have received ≥2 cycles of blinatumomab. Regarding the induction phase, 55 of 58 patients (95%) achieved
a complete hematologic remission (CHR), while 3 patients (5%) died in induction (a 77-year-old woman for unknown
causes, a 68-year-old man for an intestinal occlusion and a 52-year-old man due to pneumonia). A molecular response
(including both MRD negative and positive non-quantifiable (PNQ) cases) was obtained in 21/55 cases (38.2%). By
the end of the consolidation phase, of the 40 evaluable patients 25 (62.5%). achieved a molecular response. So far, a
single patient has relapsed (WBC at onset 121 x10 9/l and a IKZF1 plus genotype) after 3 months from CHR: at relapse,
this case harbored a T3151 mutation (Sanger sequencing and digital droplet PCR at diagnosis were wild type). At recurrence,
CD19 expression was maintained. Conclusions. The preliminary analysis of the GIMEMA ALL2820 trial proved
the feasibility of this ponatinib-blinatumomab induction consolidation strategy for newly diagnosed Ph+ ALL of all ages,
with a 95% CHR rate. Molecular responses at the end of induction are slightly superior in the current trial (38.2% vs
29% in the D-ALBA study), whereas they are virtually equivalent after 2 cycles of blinatumomab (62.5% vs 60% in
in the D-ALBA). So far, the benefit of the current protocol appears to rely on a lower relapse rate, with only 1 relapse
being observed to date, while in the same time period 3 relapses were documented with the dasatinib-blinatumomab
combination. Further details will be provided.`
    },
    {
      id: 9,
      title: `. Short NJ, Jabbour E, Jain N, et al. A phase II trial of ponatinib and blinatumomab
in adults with newly diagnosed philadelphia chromosome-positive acute lymphoblastic
leukemia (ph+ ALL). Journal of Clinical Oncology. 2023;41(16):e19013.`,
      resume: `Background: Ponatinib and blinatumomab are both active in Ph+ ALL. A combination of these agents may
lead to durable remissions when given in the frontline setting and may eliminate the need for chemotherapy or stem
cell transplant (SCT). Methods: In this phase II study, patients (pts) with newly diagnosed Ph+ ALL received up to 5
cycles of blinatumomab in combination with ponatinib, followed by ponatinib maintenance for at least 5 years. Ponatinib
30mg daily was given during cycle 1 and decreased to 15mg daily once a complete molecular response (CMR)
was achieved. Pts also received 12 doses of prophylactic IT chemotherapy. Results: Between 2/2018 and 1/2023,
54 pts were with newly diagnosed Ph+ ALL were treated. Baseline characteristics are shown in the table. Among 35
pts evaluable for hematologic response, 23 (97%) achieved CR/CRi; 1 pt had early death. Among 48 pts evaluable for
molecular response, 34 (71%) achieved CMR after 1 cycle, and 43 (90%) achieved CMR at any time. After 2 weeks of
therapy, 18/35 tested pts (51%) achieved CMR in the peripheral blood. 34/38 tested pts (89%) achieved MRD negativity
by next-generation sequencing at a level of 10-6. Four of these pts who were MRD-negative by NGS had detectable
low-level BCR:ABL1 transcripts by PCR at the same time (ranging from 0.01% to 0.05%). The median follow-up is 16
months (range, 1- 55 months). Three patients relapsed after a median of 9 months of remission (range, 8-23 months),
1 in bone marrow with new E225V mutation and 2 extramedullary-only. Three pts have died (1 from intracranial hemorrhage,
1 from post-procedural hemorrhage, and 1 from brain aneurysm). There have been no leukemia-related deaths,
the estimated 2-year EFS and OS are both 90%. Only 1 pt underwent SCT in first remission; this pt was transplanted
due to persistently low-level BCR:ABL1 positivity. Among the 47 pts in ongoing remission without SCT, the median duration
of response is 15 months. Most side effects were grade 1-2 and were consistent with the known toxicity profile
of the two agents. Ponatinib was discontinued in 2 patients due to possibly related adverse events (CVA and coronary
stenosis in 1 pt each). Conclusions: The chemotherapy-free combination of ponatinib and blinatumomab is safe and
effective in newly diagnosed Ph+ ALL, with high rates of MRD negativity. Encouraging duration of remission and OS
has been observed without the need for SCT.`
    },
    {
      id: 10,
      title: `. Jabbour E, Short NJ, Jain N, et al. Ponatinib and blinatumomab for philadelphia chromosome-
positive acute lymphoblastic leukaemia: A US, single-centre, single-arm, phase
2 trial. The Lancet Haematology. 2023;10(1):e24-e34.`,
      resume: `Background: Ponatinib and blinatumomab are effective therapies in patients with Philadelphia chromosome-
positive (Ph-positive) acute lymphoblastic leukaemia, and their combination might be a promising treatment option.
In this study, we aimed to evaluate this chemotherapy-free strategy. Methods: We did a single-centre, single-arm,
phase 2 study at the University of Texas MD Anderson Cancer Center, Houston, TX, USA, in patients aged 18 years or
older with newly diagnosed or relapsed or refractory Ph-positive acute lymphoblastic leukaemia or chronic myeloid
leukaemia in lymphoid blast phase. Patients with an ECOG performance status of 2 or less who had a total bilirubin
concentration two-times the upper limit of normal (ULN) or less (≤2·4 mg/dL), alanine aminotransferase and aspartate
aminotransferase concentration no more than three-times the ULN, and serum lipase and amylase concentrations no
more than three-times the ULN were eligible for inclusion. Ponatinib 30 mg orally and continuous intravenous blinatumomab
28 μg over 24 h (for 28 days each cycle) were given in combination for up to five 42-day cycles, followed
by ponatinib monotherapy. Patients received 12 doses of intrathecal chemotherapy as CNS prophylaxis. The primary
endpoints were complete molecular response (defined as absence of a detectable BCR–ABL1 transcript by PCR at a
sensitivity of 0·01%) in patients with newly diagnosed disease and overall response in patients with relapsed or refractory
disease or chronic myeloid leukaemia in lymphoid blast phase. All assessments were done according to the
intention-to-treat principle. The trial completed its original target accrual and was amended on March 23, 2022, to
enrol an additional 30 patients, thus increasing the sample size to 90 patients. The trial is registered with ClinicalTrials.
gov, NCT03263572, and it is ongoing. Findings: Between Feb 6, 2018, to May 6, 2022, 60 (83%) of 72 patients assessed
were enrolled and received ponatinib and blinatumomab (40 [67%] patients had newly diagnosed Ph-positive
acute lymphoblastic leukaemia, 14 [23%] had relapsed or refractory Ph-positive acute lymphoblastic leukaemia, and
six [10%] had chronic myeloid leukaemia in lymphoid blast phase). 32 (53%) patients were men and 28 (47%) were
women; 51 (85%) patients were White or Hispanic; and the median age of participants was 51 years (IQR 36–68).
The median duration of follow-up for the entire cohort was 16 months (IQR 11–24). Of patients with newly diagnosed
Ph-positive acute lymphoblastic leukaemia, 33 (87%) of 38 evaluable patients had a complete molecular response. 12
(92%) of 13 evaluable patients with relapsed or refractory Ph-positive acute lymphoblastic leukaemia had an overall
response. 11 (79%) had a complete molecular response. Five (83%) of six patients with chronic myeloid leukaemia
in lymphoid blast phase had an overall response. Two (33%) had a complete molecular response. The most common
grade 3–4 adverse events that occurred in more than 5% of patients were infection (22 [37%] patients), increased
amylase or lipase concentration (five [8%] patients), increased alanine aminotransferase or aspartate aminotransferase
concentration (four [7%] patients), pain (four [7%] patients), and hypertension (four [7%] patients). One (2%) patient
discontinued blinatumomab due to tremor. Three (5%) patients discontinued ponatinib secondary to cerebrovascular
ischaemia, portal vein thrombosis, and coronary artery stenosis in one patient each. No treatment-related deaths were
observed. Interpretation: The chemotherapy-free combination of ponatinib and blinatumomab resulted in high rates of
complete molecular response in patients with newly diagnosed and relapsed or refractory Ph-positive acute lymphoblastic
leukaemia. Patients with newly diagnosed Ph-positive acute lymphoblastic leukaemia could be spared the
toxicities associated with chemotherapy and the need for allogeneic haematopoietic stem-cell transplantation in first
response. Funding: Takeda Oncology and Amgen.`
    },
    {
      id: 11,
      title: `. Jabbour E, Short NJ, Jain N, et al. Hyper-CVAD and sequential blinatumomab for newly
diagnosed philadelphia chromosome-negative B-cell acute lymphocytic leukaemia: A
single-arm, single-centre, phase 2 trial. The Lancet Haematology. 2022;9(12):e878-e885.`,
      resume: `Background: Blinatumomab is effective in relapsed or refractory B-cell acute lymphocytic leukaemia and
results in high rates of minimal residual disease negativity. We aimed to establish whether the incorporation of blinatumomab
into front-line therapy for acute lymphocytic leukaemia could improve outcomes. Methods: We conducted
a single-arm, phase 2 trial at The University of Texas MD Anderson Cancer Center (Houston, TX, USA). Patients aged
14 years or older with confirmed, newly diagnosed Philadelphia chromosome (Ph)-negative B-cell acute lymphocytic
leukaemia were eligible, including patients who had received up to one course of chemotherapy before enrolment. Patients
received four cycles of intensive chemotherapy (hyper-CVAD [hyperfractionated cyclophosphamide, vincristine,
doxorubicin, and dexamethasone] alternating with high-dose methotrexate and cytarabine), followed by four cycles of
blinatumomab consolidation (up to 28 μg/day by continuous intravenous infusion for 28 days, given every 42 days).
Maintenance consisted of 15 cycles of alternating blocks of three cycles of POMP (6-mercaptopurine, vincristine,
methotrexate, and prednisone) chemotherapy and one of blinatumomab. The primary endpoint was relapse-free survival
evaluated in the intention-to-treat population. The trial is registered with ClinicalTrials.gov, NCT02877303, and is still
enrolling patients. Findings: Between Nov 14, 2016, and Aug 27, 2020, 38 patients with newly diagnosed B-cell acute
lymphocytic leukaemia were treated (median age 37 years [IQR 29–45]; 26 [68%] male; 21 [55%] White, non-Hispanic).
With a median follow-up of 37 months (IQR 28–49), estimated 3-year relapse-free survival was 73% (95% CI
56–85). No patients relapsed more than 2 years after the start of therapy. One (3%) patient developed transient grade 3
cytokine release syndrome, and four (11%) patients had a grade 3 blinatumomab-related neurological event. The most
common non-haematological grade 3–4 adverse events were infections, which occurred in 14 (37%) of 38 patients
during induction and in 27 (71%) of 38 patients during consolidation chemotherapy cycles. One (3%) patient discontinued
therapy because of treatment-related neurotoxicity. There were two deaths—one due to infection and one due to
respiratory failure—which were not considered treatment-related. Interpretation: Front-line sequential chemotherapy
with blinatumomab resulted in encouraging long-term survival. Future randomised studies should evaluate the routine
incorporation of blinatumomab in the treatment of patients with Ph-negative B-cell acute lymphocytic leukaemia.
Funding: Amgen.`
    },
    {
      id: 12,
      title: `. Short N, Jabbour E, Ravandi F, et al. The addition of inotuzumab ozogamicin to 
      hyper-CVAD plus blinatumomab further improves outcomes in patients with newly diagnosed B-cell 
      acute lymphoblastic leukemia: Updated results from a phase II study. Blood. 2022;140:8966-8968.`,
      resume: `
      Background: Blinatumomab and inotuzumab ozogamicin (INO) both improve overall survival (OS) 
      compared with chemotherapy in patients (pts) with relapsed/refractory B-cell acute 
      lymphoblastic leukemia (ALL). Blinatumomab is also FDA-approved for eradication of 
      persistent or recurrent measurable residual disease (MRD) after initial ALL-directed therapy. We 
      hypothesized that early incorporation of blinatumomab in pts with newly diagnosed Philadelphia 
      chromosome (Ph)-negative B-cell ALL would lead to deeper and more durable responses, reduce 
      relapses, and improve survival. We subsequently amended this study to add INO in order to 
      further improve outcomes. Methods: We conducted a phase II study to evaluate the efficacy and 
      safety of hyper-CVAD with sequential blinatumomab, with or without INO, in pts with newly 
      diagnosed Ph-negative B-cell ALL. Pts 14-59 years of age with newly diagnosed Ph-negative 
      B-cell ALL, including pts who had received no more than 1 prior cycle of chemotherapy, 
      were eligible. Pts had to have a performance status of ≤3, total bilirubin ≤2 mg/dl, 
      creatinine ≤2 mg/dl, and no significant CNS pathology (except for CNS leukemia). Pts received 
      hyper-CVAD alternating with high-dose methotrexate and cytarabine for up to 4 cycles, 
      followed by 4 cycles of blinatumomab at standard doses. Pts with CD20+ disease (≥1% cells) 
      received 8 doses of ofatumumab (2000 mg) or rituximab (375 mg/m2). Eight doses of prophylactic 
      IT chemotherapy were given. Maintenance was with alternating blocks of POMP (given in 
      maintenance cycles 1-3, 5-7, 9-11, and 13-15) and blinatumomab (given in maintenance cycles 4, 
      8, and 12). Those with high-risk disease features started blinatumomab after 2 cycles of 
      hyper-CVAD. Beginning with pt #39, INO at a dose of 0.3 mg/m2 on day 1 and 8 was added to 
      the 2 cycles of MTX/Ara-C and to 2 cycles of blinatumomab consolidation 
      (4 total cycles with INO). Results: As of June 2022, 62 pts have been treated 
      (38 without INO and 24 with INO). Pt characteristics are summarized in Table 1. 
      The median age was 34 years (range, 18-59 years). 32 pts (52%) had ≥1 high-risk 
      pretreatment characteristic at enrollment (e.g. poor-risk cytogenetics, CRLF2 positivity 
      by flow and/or TP53 mutation). 14 pts were in CR at enrollment, 7 of whom were MRD-negative 
      by flow. Among 48 pts with active disease at study entry, 100% achieved CR, with 81% achieving 
      CR after the first cycle. MRD negativity by 6-color flow cytometry was achieved in 37/53 
      evaluable pts (70%) after 1 cycle and 48/53 evaluable pts (91%) overall. Two of the 5 pts 
      who did not achieve MRD negativity were later found to have a NUP214::ABL1 fusion, 1 had 
      KMT2A rearrangement, and 2 are still early in treatment and have received only 1 cycle. 
      The median duration of follow-up is 23 months (range, 1-63 months). Overall, 6 pts (10%) 
      relapsed while on study, 20 pts (32%) underwent stem cell transplantation (SCT) in first 
      remission (2 of whom relapsed post-SCT), 2 pts (3%) died in CR, and 34 pts (55%) remain 
      in continuous remission without SCT. All relapses occurred in pts with ≥1 poor-risk 
      feature(s), and no relapses have occurred beyond 2 years from the start of treatment. 
      For the entire cohort, the 3-year continuous remission duration (CRD) and OS rates were 
      83% and 84%, respectively (Figure 1). The 3-year OS rate for pts without a high-risk baseline 
      feature was 90% and was 78% for pts with ≥1 high-risk feature. In a landmark analysis, there 
      was no difference in outcomes between pts who underwent SCT in first remission versus those 
      who did not (3-year OS: 86% versus 88%). In the INO group, only 1 pt has relapsed and none has 
      died. This pt had CNS disease at the time of enrollment and had a CNS-only relapse after 16 
      months of remission. The estimated 1-year CRD and OS rates in the INO cohort were both 100% 
      (Figure 2). Treatment was overall well-tolerated. One pt discontinued blinatumomab due to a 
      related adverse event (grade 2 encephalopathy and dysphasia). No pts discontinued INO due to 
      toxicity, and no cases of veno-occlusive disease have been observed. Conclusion: The addition 
      of INO to hyper-CVAD with sequential blinatumomab is safe and highly effective as frontline 
      treatment of Ph-negative B-cell ALL. This study shows the feasibility of incorporating both 
      INO and blinatumomab into the frontline treatment of pts with B-cell ALL. Outcomes of the pts 
      treated in the INO cohort are particularly promising. [Formula presented] Disclosures: Short: 
      Novartis: Consultancy; Astellas: Research Funding; Takeda Oncology: Consultancy, Research 
      Funding; Pfizer: Consultancy; Stemline Therapeutics: Research Funding; AstraZeneca: Consultancy; 
      Amgen: Consultancy, Honoraria. Jabbour: Adaptive Biotechnologies: Other: Advisory Role, Research 
      Funding; Spectrum: Research Funding; Amgen: Other: Advisory Role, Research Funding; Takeda: 
      Other: Advisory Role, Research Funding; Bristol Myers Squibb: Other: Advisory Role, Research 
      Funding; Genentech: Other: Advisory Role, Research Funding; Pfizer: Other: Advisory Role, 
      Research Funding; AbbVie: Other: Advisory Role, Research Funding. Ravandi: AstraZeneca: 
      Consultancy; Astex/Taiho: Membership on an entity’s Board of Directors or advisory committees, 
      Research Funding; Amgen: Honoraria, Research Funding; BMS/Celgene: Consultancy, Honoraria, 
      Research Funding; Xencor: Research Funding; Biomea Fusion, Inc.: Research Funding; Astellas: 
      Consultancy, Honoraria, Research Funding; Prelude: Research Funding; Syos: Consultancy, 
      Honoraria, Research Funding; Abbvie: Consultancy, Honoraria, Research Funding; Novartis: 
      Consultancy; Amgen: Honoraria, Research Funding. Yilmaz: Pfizer: Research Funding; 
      Daiichi-Sankyo: Research Funding. Kadia: Astellas: Research Funding; Iterion: Research Funding; 
      Pfizer: Research Funding; Ascentage: Research Funding; cellenkos: Research Funding; Servier: 
      Consultancy; Regeneron: Research Funding; Astex: Honoraria; Amgen: Research Funding; cyclacel: 
      Research Funding; AstraZeneca: Research Funding; Genentech: Consultancy, Research Funding; BMS: 
      Consultancy, Research Funding; PinotBio: Consultancy; Delta-Fly: Research Funding; JAZZ: 
      Consultancy, Research Funding; Genfleet: Research Funding; Glycomimetics: Research Funding; 
      Novartis: Consultancy; Agios: Consultancy; Abbvie: Consultancy, Research Funding. Thompson: 
      Adaptive Biotechnologies: Membership on an entity’s Board of Directors or advisory committees; 
      AbbVie, Gilead, Janssen, Pharmacyclics, Adaptive Biotechnologies, Genentech, Amgen: Honoraria; 
      AbbVie, Gilead, Janssen, Pharmacyclics, Adaptive Biotechnologies, Genentech: Consultancy; AbbVie,
       Pharmacyclics, Adaptive Biotechnologies, Genentech: Research Funding. Konopleva: Sanofi: Other: 
       grant support, Research Funding; Novartis: Patents & Royalties, Research Funding; Rafael 
       Pharmaceutical: Other: grant support, Research Funding; AstraZeneca: Other: grant support, 
       Research Funding; Ascentage: Other: grant support, Research Funding; Agios: Other: grant 
       support, Research Funding; Ablynx: Other: Grant support, Research Funding; Calithera: Other: 
       Grant Support, Research Funding; Cellectis: Consultancy, Other: Grant support, Research 
       Funding; Eli Lilly: Consultancy, Patents & Royalties, Research Funding; Reata Pharmaceuticals: 
       Current equity holder in private company, Patents & Royalties; Janssen: Consultancy, Membership 
       on an entity’s Board of Directors or advisory committees; Kisoji: Consultancy, Honoraria; 
       Amgen: Consultancy; Forty-Seven: Consultancy, Honoraria, Other: Grant support; Stemline 
       Therapeutics: Consultancy, Membership on an entity’s Board of Directors or advisory committees, 
       Research Funding; F. Hoffman La Roche: Consultancy, Honoraria, Membership on an entity’s 
       Board of Directors or advisory committees, Other: Grant support, Research Funding; Genentech: 
       Consultancy, Other: grant support, Research Funding; AbbVie: Consultancy, Other: grant support, 
       Research Funding. Ferrajoli: Beigene: Research Funding; AstraZeneca: Membership on an entity’s 
       Board of Directors or advisory committees, Research Funding; Janssen: Membership on an entity’s 
       Board of Directors or advisory committees. Jain: Janssen Pharmaceuticals, Inc.: Consultancy, 
       Honoraria, Other: Travel Support; Medisix: Research Funding; TransThera Sciences: Research 
       Funding; Servier Pharmaceuticals LLC: Research Funding; BMS: Consultancy, Honoraria, Other: 
       Travel Support, Research Funding; ADC Therapeutics: Research Funding; Cellectis: Honoraria, 
       Research Funding; Loxo Oncology: Research Funding; Takeda: Research Funding; Mingsight: 
       Research Funding; AstraZeneca: Consultancy, Honoraria, Other: Travel Support, Research 
       Funding; TG Therapeutics: Honoraria; Pharmacyclics, Inc.: Consultancy, Honoraria, Other: 
       Travel Support, Research Funding; Precision Biosciences: Consultancy, Honoraria, Other: 
       Travel Support, Research Funding; Kite, a Gilead Company: Consultancy, Honoraria, Research 
       Funding; Ipsen: Honoraria; CareDx: Honoraria; Genentech, Inc.: Consultancy, Honoraria, Other: 
       Travel Support, Research Funding; Beigene: Honoraria; MEI Pharma: Honoraria; Novalgen: Research 
       Funding; Fate Therapeutics: Research Funding; Aprea Therapeutics: Research Funding; Pfizer: 
       Research Funding; Dialectic Therapeutics: Research Funding; Newave: Research Funding; 
       Cellectis: Honoraria, Research Funding; Incyte Corporation: Research Funding; AbbVie: 
       Consultancy, Honoraria, Other: Travel Support, Research Funding; Adaptive Biotechnologies: 
       Consultancy, Honoraria, Other: Travel Support, Research Funding. Sasaki: Pfizer: Membership 
       on an entity’s Board of Directors or advisory committees; Daiichi-Sankyo: Membership on an 
       entity’s Board of Directors or advisory committees; Otsuka Pharmaceuticals: Honoraria; 
       Novartis: Consultancy, Membership on an entity’s Board of Directors or advisory committees, 
       Research Funding. Alvarado: BerGenBio: Research Funding; Astex Pharmaceuticals: Research 
       Funding; Daiichi-Sankyo/Lilly: Research Funding; Jazz Pharmaceuticals: Research Funding; 
       Sun Pharma: Research Funding; FibroGen: Research Funding. Borthakur: Catamaran Bio, Abbvie, 
       PPD Development, Protagonist Therapeutics, Janssen: Consultancy; Pacylex, Novartis, Cytomx, 
       Bio Ascend: Membership on an entity’s Board of Directors or advisory committees; Astex 
       Pharmaceuticals, Ryvu, PTC Therapeutics: Research Funding. DiNardo: Kura: Honoraria, 
       Membership on an entity’s Board of Directors or advisory committees; Foghorn: Honoraria, 
       Research Funding; ImmuneOnc: Honoraria, Research Funding; Notable Labs: Current holder of 
       stock options in a privately-held company, Membership on an entity’s Board of Directors or
        advisory committees; Gilead: Honoraria; Bristol Myers Squibb: Honoraria, Research Funding; 
        Cleave: Research Funding; GlaxoSmithKline: Membership on an entity’s Board of Directors or 
        advisory committees; Astellas: Honoraria; LOXO: Research Funding; Novartis: Honoraria; 
        Servier: Consultancy, Honoraria, Research Funding; Forma: Research Funding; AbbVie: 
        Consultancy, Research Funding; Astex: Research Funding; GenMab: Membership on an entity’s 
        Board of Directors or advisory committees; Bluebird Bio: Honoraria; Jazz: Honoraria; Takeda: 
        Honoraria. Kantarjian: Jazz Pharmaceuticals: Research Funding; Ascentage: Membership on an 
        entity’s Board of Directors or advisory committees, Research Funding; Ipsen Pharmaceuticals: 
        Honoraria, Membership on an entity’s Board of Directors or advisory committees; ImmunoGen: 
        Research Funding; KAHR Medical Ltd: Honoraria, Membership on an entity’s Board of Directors 
        or advisory committees; Daiichi-Sankyo: Consultancy, Research Funding; Novartis: Honoraria, 
        Research Funding; NOVA Research: Honoraria; Astellas Health: Honoraria, Membership on an 
        entity’s Board of Directors or advisory committees; AbbVie: Honoraria, Research Funding; 
        Amgen: Honoraria, Research Funding; Pfizer: Honoraria, Research Funding; Takeda: Honoraria.
      `
    },
    {
      id: 13,
      title: `. Short NJ, Kantarjian HM, Ravandi F, et al. A phase II study of hyper-CVAD with sequential
blinatumomab (blina), with or without inotuzumab ozogamicin (INO), in adults with
newly diagnosed B-cell acute lymphoblastic leukemia (ALL). Journal of Clinical Oncology.
2022;40(16).`,
      resume: `Background: Blina and INO are highly effective in relapsed/refractory B-cell ALL and are associated with
high rates of measurable residual disease (MRD) clearance. Use of these agents in the frontline setting may improve
outcomes. Methods: Patients (pts) 14-59 years of age with newly diagnosed Philadelphia chromosome (Ph)-negative
B-cell ALL, including pts who had received no more than 1 prior cycle of chemotherapy, were eligible. Pts received
hyper-CVAD alternating with high-dose MTX/Ara-C for up to 4 cycles, followed by 4 cycles of Blina. Pts with CD20+
disease received 8 doses of an anti-CD20 antibody. Eight doses of IT chemotherapy were given. Maintenance was
with alternating blocks of POMP (maintenance cycles 1-3, 5-7, 9-11, and 13-15) and Blina (maintenance cycles 4, 8,
and 12). Beginning with pt #39, INO at a dose of 0.3 mg/m2 on day 1 and 8 was added to the 2 cycles of MTX/Ara-C
and to 2 cycles of Blina (4 total cycles with INO). Results: Characteristics of the 58 treated pts (38 without INO and
20 with INO) are summarized in Table. Among 45 pts with active disease at study entry, 100% achieved CR. Overall,
76% achieved MRD negativity by flow cytometry after induction and 95% at any time over the course of therapy. The
median follow-up of the entire cohort is 26 months (range, 3-61+ months). Overall, 5 pts (9%) relapsed, 18 (31%)
underwent transplant in first remission (including an additional 2 pts who relapsed post-transplant), 2 (3%) died in CR,
and 33 (57%) remain in continuous remission without transplant. All relapses occurred in pts with established poorrisk
features and no relapses have occurred beyond 2 years. For the entire cohort, the estimated 3-year OS is 85%
and the 3-year continuous remission duration is 84%. No relapses or deaths have occurred in the INO group, and the
estimated 1-year OS is 100%. Treatment was overall well-tolerated. One patient discontinued Blina due to recurrent
grade 2 neurotoxicity. No pts have discontinued INO due to toxicity and no cases of veno-occlusive disease have been
observed. Conclusions: Hyper-CVAD with sequential Blina is highly effective as frontline treatment of Ph-negative B-cell
ALL. The addition of INO to this regimen was safe and early results are encouraging, with no relapses observed to date.`
    },
    {
      id: 14,
      title: `. Foà R, Bassan R, Vitale A, et al. Dasatinib-blinatumomab for ph-positive acute lymphoblastic
leukemia in adults. N Engl J Med. 2020;383(17):1613-1623.`,
      resume: `Outcomes in patients with Philadelphia chromosome (Ph)-positive acute lymphoblastic leukemia (ALL) have
improved with the use of tyrosine kinase inhibitors. Molecular remission is a primary goal of treatment. METHODS We
conducted a phase 2 single-group trial of first-line therapy in adults with newly diagnosed Ph-positive ALL (with no upper
age limit). Dasatinib plus glucocorticoids were administered, followed by two cycles of blinatumomab. The primary
end point was a sustained molecular response in the bone marrow after this treatment. RESULTS Of the 63 patients
(median age, 54 years; range, 24 to 82) who were enrolled, a complete remission was observed in 98%. At the end
of dasatinib induction therapy (day 85), 29% of the patients had a molecular response, and this percentage increased
to 60% after two cycles of blinatumomab; the percentage of patients with a molecular response increased further
after additional blinatumomab cycles. At a median follow-up of 18 months, overall survival was 95% and disease-free
survival was 88%; disease-free survival was lower among patients who had an IKZF1 deletion plus additional genetic
aberrations (CDKN2A or CDKN2B, PAX5, or both [i.e., IKZF1plus]). ABL1 mutations were detected in 6 patients who had
increased minimal residual disease during induction therapy, and all these mutations were cleared by blinatumomab.
Six relapses occurred. Overall, 21 adverse events of grade 3 or higher were recorded. A total of 24 patients received a
stem-cell allograft, and 1 death was related to transplantation (4%). CONCLUSIONS A chemotherapy-free induction and
consolidation first-line treatment with dasatinib and blinatumomab that was based on a targeted and immunotherapeutic
strategy was associated with high incidences of molecular response and survival and few toxic effects of grade 3 or
higher in adults with Ph-positive ALL. (Funded by Associazione Italiana per la Ricerca sul Cancro and others; GIMEMA
LAL2116 D-ALBA EudraCT number, 2016 -001083-11; ClinicalTrials.gov number, NCT02744768.)`
    },
    {
      id: 15,
      title: `. Short, N. J., Kantarjian, H., & Jabbour, E. Advances in the treatment of adults with
newly diagnosed B-cell acute lymphoblastic leukemia: the role of frontline immunotherapy-
based regimens. Leukemia & Lymphoma. 2024; 65(10), 1405–1417.`,
      resume: `Blinatumomab and inotuzumab ozogamicin (INO) are both active in relapsed/refractory B-cell acute lymphoblastic
leukemia (ALL) and improve outcomes compared with conventional chemotherapy in this setting. Several prospective
clinical trials have explored the use of these agents in adults with newly diagnosed B-cell ALL, with promising
outcomes observed in younger and older adults and in both Philadelphia chromosome (Ph)-positive and Ph-negative
ALL. These novel regimens result in high rates of deep measurable residual disease (MRD) negativity and may improve
survival compared with chemotherapy-only approaches, allowing for less reliance on intensive chemotherapy and
allogeneic hematopoietic stem cell transplantation (HSCT). This review discusses novel approaches to integrating INO
and/or blinatumomab into frontline ALL regimens, including the potential role of chemotherapy-free regimens in some
subgroups. The role of MRD monitoring is also discussed, including how this can inform decisions for consolidative
allogeneic HSCT or investigational approaches with CD19 CAR T-cells.`
    },
    {
      id: 16,
      title: `. Jabbour E, Short NJ, Jain N, et al. The evolution of acute lymphoblastic leukemia research
and therapy at MD Anderson over four decades. J Hematol Oncol. 2023;16(1):22.
Published 2023 Mar 16.`,
      resume: `Progress in the research and therapy of adult acute lymphoblastic leukemia (ALL) is accelerating. This analysis
summarizes the data derived from the clinical trials conducted at MD Anderson between 1985 and 2022 across
ALL subtypes. In Philadelphia chromosome-positive ALL, the addition of BCR::ABL1 tyrosine kinase inhibitors (TKIs) to
intensive chemotherapy since 2000, improved outcomes. More recently, a chemotherapy-free regimen with blinatumomab
and ponatinib resulted in a complete molecular remission rate of 85% and an estimated 3-year survival rate of
90%, potentially reducing the role of, and need for allogeneic stem cell transplantation (SCT) in remission. In younger
patients with pre-B Philadelphia chromosome-negative ALL, the integration of blinatumomab and inotuzumab into the
frontline therapy has improved the estimated 3-year survival rate to 85% across all risk categories. Our future strategy
is to evaluate the early integration of both immunotherapy agents, inotuzumab and blinatumomab, with low-dose
chemotherapy (dose-dense mini-Hyper-CVD-inotuzumab-blinatumomab) into the frontline setting followed by CAR T
cells consolidation in high-risk patients, without any further maintenance therapy. In older patients, using less intensive
chemotherapy (mini-Hyper-CVD) in combination with inotuzumab and blinatumomab has improved the 5-year survival
rate to 50%. Among patients ≥ 65-70 years, the mortality in complete remission (CR) is still high and is multifactorial
(old age, death in CR with infections, development of myelodysplastic syndrome or acute myeloid leukemia). A
chemotherapy-free regimen with inotuzumab and blinatumomab is being investigated. The assessment of measurable
residual disease (MRD) by next-generation sequencing (NGS) is superior to conventional assays, with early MRD negativity
by NGS being associated with the best survival. We anticipate that the future therapy in B-ALL will involve less
intensive and shorter chemotherapy regimens in combination with agents targeting CD19 (blinatumomab), CD20, and
CD22 (inotuzumab). The optimal timing and use of CAR T cells therapy may be in the setting of minimal disease, and
future trials will assess the role of CAR T cells as a consolidation among high-risk patients to replace allogeneic SCT. In
summary, the management of ALL has witnessed significant progress during the past four decades. Novel combination
regimens including newer-generation BCR::ABL1 TKIs and novel antibodies are questioning the need and duration of
intensive chemotherapy and allogeneic SCT.`
    },
    {
      id: 17,
      title: `. Pourhassan H, Agrawal V, Pullarkat V, Aldoss I. Positioning blinatumomab in the
frontline of adult B-cell acute lymphoblastic leukemia treatment. Frontiers in oncology.
2023;13:1237031.`,
      resume: `Blinatumomab is a bispecific T cell engager that has shown efficacy in relapsed/refractory Philadelphia
chromosome (Ph)-positive and Ph-negative acute lymphoblastic leukemia (ALL). Considering its favorable safety and
activity in advanced ALL, blinatumomab as a targeted immunotherapy is fast gaining a frontline position in the ALL
treatment paradigm. There have been multiple completed and ongoing studies showing significant promise with improved
response rates and survival outcomes and decreased treatment toxicity and need for multi-agent chemotherapy
regimens. The early use of blinatumomab has established success in Ph-negative and Ph-positive B-ALL, and this has
extended to older adults with ALL who have historically had substantially inferior outcomes compared to their pediatric
and young adult counterparts. Herein we will review the current data describing the early use of blinatumomab in newly
diagnosed adults with B-cell ALL and future directions.`
    },
    {
      id: 18,
      title: `. Mendez-Guerra, C, Reyes-Farias CI, Uribe-Ramirez L, Carrasco-Yalan A. Blinatumomab
as frontline therapy for B-cell precursor acute lymphoblastic leukemia in a critically
ill young adult: a case report. Annals Of Blood, 2024; 9.`,
      resume: `Background: Adolescent and young adults (AYA) with acute lymphoblastic leukemia (ALL) represent a unique
complex group, particularly, with respect to the therapeutic approach. The current trend is to treat AYAs with pediatric
ALL treatment regimens, which has been associated with higher survival rates. Blinatumomab is a bispecific monoclonal
antibody that binds to CD19 antigen on B-lymphoblasts and CD3 on T cells. Favorable outcomes regarding the
utilization of blinatumomab have been obtained in both children and adults, for the treatment of relapsed/refractory
(r/r) and minimal residual disease (MRD)-positive B-cell precursor ALL (B-ALL). Nevertheless, the safety and efficacy of
blinatumomab in early stages of the disease as frontline therapy is not fully elucidated. Case Description: A 20-year-old
male was referred to our hospital in critical condition for untreated newly diagnosed Philadelphia chromosome-negative
B-ALL (Ph-negative B-ALL) complicated with sepsis and respiratory failure. After hemodynamic and ventilatory
stabilization, induction therapy with blinatumomab as a continuous intravenous infusion was initiated followed by
vincristine, daunorubicin and prednisone. Chemo-immunotherapy was well tolerated and by the end of induction, the
patient improved his clinical status and achieved complete remission, with MRD negativity by bone marrow (BM) flow
cytometry. Conclusions: Blinatumomab followed by chemotherapy showed favorable outcomes as frontline therapy in
a newly diagnosed critically ill patient with Ph-negative B-ALL.`
    },
  ];

  // Array de referências para os textos
  const textRefs = useRef(array1to60);

  // Função que rola até o texto específico
  useEffect(() => {
    if (savedNumber >= 1 && savedNumber <= 18) {
      // Certifica que o número do texto é válido e rola até ele
      textRefs.current[savedNumber - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }, [savedNumber]);

  return (
    <div className="text-container">
      <header>
        <h1>Blina Frontline Pediátrico</h1>
      </header>

      {array1to60.map((item, index) => {
        return (
          <section
            key={index}
            ref={el => textRefs.current[index] = el}
            className="text-item"
          >
            <h2>{item.id}{item.title}</h2>
            <p className="summary">
              <strong>Abstract:</strong>{item.resume}
            </p>
          </section>
        )
      })}


      <footer className="footer">
        <p>
          Material destinado aos profissionais da saúde. Este material pode conter informações sobre terapias ou medicamentos ainda não
          aprovados no Brasil. A Amgen recomenda o uso de seus medicamentos de acordo com a aprovação regulatória local.
        </p>
        <p>SC-BRA-AMG103-00637. Aprovado em outubro de 2024.</p>
      </footer>
    </div>
  );
}