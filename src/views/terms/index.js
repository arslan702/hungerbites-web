"use client";
import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import React from "react";

const TermsPage = () => {
  return (
    <Container maxWidth="lg" disableGutters sx={{ py: 4, px: 2 }}>
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ color: "custom.green", py: 2, fontWeight: "600" }}>
        Terms & Conditions
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        By using Karobar Technologies Website & Mobile Application (“Platform”, “Karobar Mobile Application”) 
        you agree to these Terms and Conditions (“Terms and Conditions), Privacy Policy, Returns and Refund 
        Policy of Karobar Technologies. Please read the Terms and Conditions carefully before using Karobar 
        Technologies Website & Mobile Application.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        These Terms and Conditions are entered into between you and Karobar Technologies Private Limited, a 
        private limited company duly incorporated under the Companies Act, 2017 holding registration number 
        0207538 (“Karobar,” “we,” “us,” or “our”) and governs your use of www.karobartechnologies.com / or 
        the Karobar Mobile Application along with its related sub-domains, sites, services and tools. By using 
        the Karobar Web Platform, you are agreeing to be bound by the terms and conditions, which means that 
        you have read and understood them, and you accept the terms outlined. If you are acting on behalf of 
        an entity, such as a company or organization, you must have the authority to enter into these terms and 
        conditions on their behalf.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        If you do not agree to the terms and conditions, you should not use the Karobar Web Platform. This means 
        that you should not install, access, download, or otherwise use the software or service. If you have 
        already installed or used the Platform and you do not agree to the terms and conditions, you should 
        uninstall the software and stop using the service immediately.
        This section of the terms and conditions indicates that Karobar Technologies may update or change the 
        terms and conditions at any time, at their sole discretion. The revised terms will be posted on their 
        website, http://www.karobartechnologies.com, or within an update or upgrade of the Platform.
      </Typography>

      <Typography variant="body2" sx={{ py: 2 }}>
        If you continue to use the Platform after the effective date of the amended terms and conditions, it 
        is assumed that you have read and understood the changes and that you agree to be bound by the updated 
        terms. If you do not agree to the updated terms, you must stop using the Platform and terminate these 
        terms and conditions.
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        It is important to review the terms and conditions periodically to stay informed about any changes that 
        may affect your use of the Platform. If you have any questions or concerns about the changes, you should 
        contact Karobar Technologies for further information.
      </Typography>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        2. Conditions to use
      </Typography>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        A. By using Karobar
      </Typography>
      <Typography variant="body2" sx={{ py: 2 }}>
        In connection with using or accessing our services you will not:
      </Typography>
      <ul>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            his means that the platform may have specific categories or areas for certain types of content 
            or items, and users are expected to post or upload their content or items in the appropriate 
            category or area. Posting or uploading content or items in an inappropriate category or area may 
            lead to confusion or inconvenience for other users and may not be allowed.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Users are expected to comply with all applicable laws and regulations while using the platform 
            and respect the rights of third parties. Users should not attempt to circumvent any systems or 
            policies put in place by the platform to ensure fair and appropriate use of the service.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Individuals who are not able to form legally binding contracts, such as those who are under 18 
            years old, are not permitted to use the platform's services. Similarly, individuals who have been 
            temporarily or indefinitely suspended from using the platform's services or are subject to economic 
            or trade sanctions prohibiting transactions are also not allowed to use the platform.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            It is important to review the specific eligibility requirements for using the platform's services 
            to ensure that you comply with the terms and conditions and avoid any penalties or consequences for 
            violating them.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            When you make a purchase through the platform, you are entering into a contract with the seller 
            to pay for the item or service. Failing to pay for the purchased item may violate this contractual 
            agreement and could result in penalties or consequences.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Manipulating the price of an item means artificially inflating or deflating the price to gain an 
            advantage over other buyers or sellers. Interfering with another user's listings means taking 
            actions to harm or disrupt their ability to sell or purchase items through the platform.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Posting false, inaccurate, misleading, or deceptive content refers to providing information that 
            is not truthful or accurate, or that misrepresents the item or service being offered. Posting 
            defamatory or libelous content refers to making false statements that harm the reputation of 
            another person or entity.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            The feedback and ratings systems are an important part of the platform, as they allow users to 
            provide feedback on their experiences with other users and help to maintain the integrity of the 
            platform. Taking actions that undermine these systems can negatively impact the platform's community 
            and may violate the terms and conditions.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Transferring your account without the platform's consent can result in unauthorized use of the 
            platform and a violation of the terms and conditions. It is important to ensure that any transfer 
            of your account is done in compliance with the terms and conditions and with the platform's permission.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            For example, if a user attempts to sell or transfer their Karobar account to another user without 
            the platform's consent, this would be a violation of the terms and conditions.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            These types of communications are often unwanted and can negatively impact the platform's community. 
            Posting spam or sending unsolicited or bulk electronic communications can also violate anti-spam 
            laws and regulations in many jurisdictions.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Distributing viruses or other harmful technologies can compromise the security and integrity of 
            the platform and its users. This can result in financial losses, damage to personal property, and 
            other negative consequences.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            The use of automated tools to access the platform can put an undue strain on the platform's 
            resources and infrastructure, and can also compromise the security and integrity of the platform. 
            Therefore, Karobar requires users to obtain prior permission before using any automated means to 
            access the platform.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Interfering with the platform's functioning can cause disruptions to the services, slow down the 
            platform's performance, or even cause it to crash. Therefore, Karobar requires users to use the 
            platform in a way that does not impose an unreasonable or disproportionately large load on its 
            infrastructure.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Infringing upon Intellectual Property Rights can involve various actions, such as reproducing, 
            performing, displaying, distributing, copying, reverse engineering, decompiling, disassembling, 
            or preparing derivative works from content that belongs to Karobar or someone else without their 
            express permission.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            It is important to ensure that you have the proper rights or permissions to use any content that 
            you post on the Karobar platform and to respect the Intellectual Property Rights of others. Failure 
            to do so can result in legal consequences and penalties.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Commercializing Karobar's application or software without permission can include actions such as 
            selling or offering for sale any Karobar application, software, or associated information for a 
            profit. This can also include using Karobar's platform or software to develop a competing product 
            or service.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            Karobar does not tolerate any fraudulent or illegal activities and reserves the right to take 
            appropriate legal action against any users engaging in such activities on its platform.
          </Typography>
        </li>
        <li>
          <Typography variant="body2" sx={{ py: 2 }}>
            It is prohibited to send, use or reuse any material that does not belong to you and is illegal, 
            offensive, deceptive, misleading, abusive, indecent, harassing, blasphemous, defamatory, libelous, 
            obscene, pornographic, paedophilic or menacing. This includes material that is ethnically 
            objectionable, disparaging, or in breach of copyright, trademark, confidentiality, privacy, or 
            any other proprietary information or right. Additionally, content that is harmful to minors, 
            impersonates another person, threatens the unity, integrity, security or sovereignty of Pakistan 
            or friendly relations with foreign States, or is objectionable or otherwise unlawful in any manner 
            whatsoever is also prohibited. This includes content that consists of or contains software viruses, 
            political campaigning, commercial solicitation, chain letters, mass mailings, or any form of spam
          </Typography>
        </li>
      </ul>
      <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
        B. Information and Accounts
      </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          When you create an account with Karobar or provide personal information to complete the creation of 
          an account, you may be required to provide certain personal information such as your email address, 
          registered mobile number, Computerized National identity Card details, National Tax Number, Date of 
          Birth, etc. You represent and warrant that the information you provide is true and correct to the best 
          of your knowledge and belief, and you agree to fully indemnify Karobar from any claims, liabilities, 
          and losses that may arise as a result of providing inaccurate information. It's important to provide 
          accurate information, as it helps ensure the security and integrity of the platform for all users.    
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar may, at its sole discretion, cancel or disable a user's account and password without prior 
          notice or reason. In such a case, Karobar will not be liable for any losses or damages that the user 
          may suffer as a result of the cancellation or disabling of their account.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You are responsible for maintaining the confidentiality of your account information, including your 
          user identification, password, and other related private information. You agree to take all necessary 
          steps to prevent misuse of your account and to inform Karobar immediately if you suspect any 
          unauthorized use of your account. You also agree that any use of the Platform and related services 
          using your account and password shall be deemed to be either performed by you or authorized by you, 
          and you will be held responsible and liable for any actions taken using your account. Additionally, 
          you agree to fully indemnify Karobar against any losses arising from the use of your account. Karobar 
          reserves the right to annul your username and/or password without giving any reason or notice and will 
          not be responsible for any losses resulting from this action.
          Please ensure that the details you provide us with are correct and complete at all times. It is 
          important to keep your account information updated and secure to ensure the safety and integrity of 
          your account. Failure to do so may result in access being denied or termination of your account 
          without prior notice.
        </Typography>
        <Typography
        lineHeight="28px"
        variant="h3"
        sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
          C. Platform for communication
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You agree, understand and acknowledge that the Platform is an online platform that enables you to 
          purchase products listed at the price indicated therein at any time either from an independent seller 
          or from us from any location using a payment method of your choice. You further agree and acknowledge 
          that we are only a facilitator in respect of sales made by an independent seller and cannot be a party 
          to or control in any manner any transactions on the Platform or on a payment gateway as made available 
          to you by an independent seller. Accordingly, the contract of sale of products on the Platform, in 
          cases where Karobar is acting as a facilitator, shall be a strictly bipartite contract between you 
          and the sellers on our Platform.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            D. platform’s Availability 
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We strive to ensure that our Platform is always available to users and that they have uninterrupted 
          and error-free access. However, due to the nature of the Internet and the Platform, this cannot be 
          guaranteed. Therefore, we reserve the right to suspend or restrict access to the Platform for repairs, 
          maintenance, or to introduce new features or services without prior notice. We will do our best to 
          limit the frequency and duration of any such suspension or restriction.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            E. Authorization to contact you
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar may contact you using auto dialed or prerecorded calls and text messages at any telephone 
          number you have provided for various reasons such as notifying you about your account, troubleshooting 
          account issues, resolving disputes, collecting debts, conducting surveys or questionnaires, or 
          enforcing the terms and conditions of your agreement with Karobar. If you consent to such 
          communications, Karobar may also contact you for marketing purposes, such as offers and promotions.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Please note that Karobar may also collect other telephone numbers from you and may place manual 
          non-marketing calls to any of those numbers and auto dialed non-marketing calls to any landline. 
          Standard telephone minute and text charges may apply, and you may be charged overage fees if you 
          exceed your plan limits.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar reserves the right to monitor or record telephone conversations for quality control and 
          training purposes or for its own protection, without further notice or warning. Karobar's automated 
          systems also scan and analyze the contents of every message sent through its messages platform to 
          detect and prevent fraudulent activity or violations of its Terms and Conditions, including the 
          incorporated terms, notices, rules, and policies. This scanning and analysis may occur before, 
          during, or after the message is sent, or while in storage, and may result in message delays or 
          withholding. Additionally, Karobar may store message contents for the purpose of conducting this 
          scanning and analysis.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            F. Privacy
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Please review our Privacy Policy, which also governs your visit to the Platform. The personal 
          information / data provided to us by you or your use of the Platform will be treated as strictly 
          confidential, in accordance with the Privacy Policy and applicable laws and regulations. If you 
          object to your information being transferred or used in the manner specified in the Privacy Policy, 
          please do not use the Platform.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            G. Submission
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          By submitting any content or information to the Platform, it becomes the property of Karobar, and you 
          acknowledge that it will not be returned to you. If you post comments or reviews, you also grant 
          Karobar the right to use your name in connection with such content. It is important that you provide 
          accurate and truthful information and not mislead Karobar or third parties about the origin of any 
          submissions. Karobar reserves the right to remove or edit any submissions without notice or legal 
          obligation to do so.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            H. Claims pertaining to hostile content
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar is stating that they are not responsible for the contents of every product or comment on the 
          platform. They are operating on a "claim, review and takedown" basis, which means that if you believe 
          any content on the platform is illegal, offensive, or otherwise objectionable, you should notify them 
          immediately through email. They will then investigate and remove any valid objectionable content 
          within a reasonable amount of time.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          When reporting objectionable content, it is important to provide as much information as possible to 
          help the platform investigate and take appropriate action
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            I. Trademarks and copyrights
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          [insert trademarks] and other marks indicated on our Karobar Web Portal and its associated trademarks, 
          trade dress, and intellectual property rights are the property of Karobar. The use of Karobar's 
          trademarks or trade dress in connection with any product or service that does not belong to Karobar 
          is prohibited. Any other trademarks appearing on the Karobar Web Portal belong to their respective 
          owners.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          The clause also confirms that all intellectual property rights, whether registered or unregistered, 
          in the Karobar Web Portal, its content, and website design, including text, graphics, software, photos, 
          videos, music, sound, and their selection and arrangement, remain the property of Karobar. The entire 
          contents of the Karobar Web Portal are protected by copyright as a collective work under Pakistani 
          copyright laws and international conventions. All rights are reserved.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            J. Disclaimer
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          As a user of the platform, you are responsible for assessing and mitigating any risks associated with 
          transacting with sellers or manufacturers on the platform. The platform operator (Karobar) does not 
          take any responsibility for any actions or inactions of the sellers or manufacturers or any breach of 
          conditions, representations or warranties by them. The platform operator also does not mediate or 
          resolve any disputes or disagreements between the users and the sellers or manufacturers of the 
          products.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar does not provide any warranties or representations regarding the quality, suitability, 
          accuracy, reliability, completeness, timeliness, performance, safety, merchantability, fitness for 
          a particular purpose, or legality of the products listed or displayed on the platform. Additionally, 
          Karobar does not endorse or support any products sold on the platform, and shall not be liable for 
          any transactions made on the platform. Karobar also states that they have taken precautions to avoid 
          inaccuracies in content but provides no warranty of any kind for the platform or its contents.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar will not be held liable for any actions or inactions of any other service provider listed on 
          the platform, including but not limited to payment providers, installment offerings, warranty services, 
          and any other services that may be provided by third-party providers. Users are advised to read and 
          understand the terms and conditions of these service providers before using their services. Karobar 
          shall not be responsible for any losses or damages that may arise from the use of these services.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            K. Indemnity
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          As a user of the Karobar platform, you are responsible for complying with the terms and conditions 
          and any applicable laws and regulations. If you breach any of these terms and conditions or violate 
          any law or regulation, you may be held liable for any damages, penalties, or legal fees resulting 
          from such actions. Karobar may also require you to indemnify and hold harmless the company and its 
          subsidiaries, affiliates, officers, directors, agents, and employees from any claims, demands, or 
          actions made by third parties as a result of your actions on the platform.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          you release Karobar, its affiliates, officers, and representatives from any responsibility or 
          liability for any harm, damage, or other consequences resulting from the actions or inactions of 
          sellers or other service providers on the platform. You also waive any claims or demands you may 
          have against Karobar in this regard under any statute, contract, or otherwise. This clause essentially 
          limits Karobar's liability for the actions of third-party sellers or service providers on the platform. 
          It is advisable to review this clause carefully before agreeing to these terms and conditions.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            L. Claims against infringing content
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          company respects the intellectual property rights of others and provides a mechanism for individuals 
          to report any concerns of infringement. To report a claim, individuals should email the company and 
          include their name, address, contact information, and relevant details of the claim, such as the name 
          of the infringing party, instances of infringement, and proof of infringement. However, it is important 
          to provide complete and accurate information, as incomplete or false claims may be considered invalid 
          or result in legal consequences. The company also commits to addressing the concern within a reasonable 
          amount of time.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          As a platform, Karobar cannot get involved in enforcing exclusive distribution or resale agreements 
          between manufacturers, distributors, and resellers. If any party believes that their rights have been 
          violated, they should seek legal advice from a legal specialist.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            M. Third party businesses
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          you transact with third-party sellers or businesses on the Karobar platform, you should carefully 
          review their privacy statements and related terms and conditions. We are not responsible for examining 
          or evaluating the offerings of these third-party businesses, and we do not endorse or warrant the 
          content of their websites or the quality or safety of their products or services. Any transaction 
          that you make with a third-party business is solely between you and that business, and we are not 
          responsible for any loss or damage that you may incur as a result of those transactions. However, 
          we may share customer information related to those transactions with the third-party business to 
          facilitate the transaction.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            N. Communication
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          When you visit the Platform or place an order, you will be required to provide a valid phone number, 
          and we may communicate with you via email, SMS, phone call, or other modes of communication that we 
          choose to employ. By using the Platform and placing an order, you consent to receiving communications 
          from us related to your use of the website or the placement of your order. These communications may 
          include transactional, promotional, and/or commercial messages. You agree to treat all modes of 
          communication with the same importance.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            O. Losses
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We will not be responsible for any indirect or consequential loss, including but not limited to 
          loss of profits, revenue, contracts, anticipated savings, data, goodwill, or wasted expenditure, 
          that is not reasonably foreseeable to both you and us when you began using the Platform.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            P. Amendments to conditions or alterations of service and related promise
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Karobar reserves the right to modify any aspect of the Platform and its policies, including these 
          terms and conditions, at any time without prior notice to the users. Users will be bound by the 
          policies and terms and conditions that are in effect at the time of their use of the Platform. 
          However, any changes made to these policies or terms and conditions will not apply retroactively 
          to orders that have already been placed by users, unless required by law or government authority. 
          If any part of these conditions is deemed invalid or unenforceable, the remaining parts will still 
          be valid and enforceable.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            Q. Force Majeure
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        if circumstances arise that are beyond the reasonable control of Karobar and prevent it from fulfilling 
        its obligations under these conditions, such as acts of God, war, riots, fire, flood, natural disasters, 
        or other similar events, then Karobar will not be held responsible for any delay or failure to comply 
        with its obligations. However, this clause does not affect your statutory rights as a consumer.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            R. Waiver
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        The statement you mentioned is a standard clause that emphasizes the rights of the platform owner to 
        conduct their business in a way they see fit, and to take action against any breach of their terms and 
        conditions, even if they choose not to do so in other instances. This is a common provision in most 
        commercial agreements to protect the interests of the service provider
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            S. Termination
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        It states that the company reserves the right to terminate the agreement and revoke any or all of the user's 
        rights granted under the agreement without prior notice. Upon termination, the user must cease all access to 
        and use of the platform, and the company may also revoke all password(s) and account identification issued 
        to the user. The termination of the agreement does not affect any respective rights and obligations, 
        including payment obligations, of the parties arising before the termination date. The company shall not 
        be liable to the user or any other person as a result of any such suspension or termination.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            T. Governing Law and Jurisdiction
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        if there is any dispute between you and Karobar, it will be resolved through arbitration instead of 
        going to court. The arbitration will be conducted according to the Arbitration Act, 1940, and a sole 
        arbitrator appointed by Karobar will make the final decision. If you choose to opt for arbitration, 
        you agree to share the costs of the arbitration proceedings equally with Karobar. The laws of The 
        Islamic Republic of Pakistan will govern these terms and conditions.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            U. Contact us
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You may reach us at Junaid.ilyas@karobartechnologies.com
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            V. Our Software
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Our software includes any software (including any updates or upgrades to the software and any related 
          documentation) that we make available to you from time to time for your use in connection with the 
          Karobar Web Portal (the "Software").
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        You may use the software solely for purposes of enabling you to use and enjoy our services as permitted by 
        the Terms and Conditions and any related applicable terms as available on the Platform. You may not 
        incorporate any portion of the Software into your own programs or compile any portion of it in combination 
        with your own programs, transfer it for use with another service, or sell, rent, lease, lend, loan, 
        distribute or sub-license the Software or otherwise assign any rights to the Software in whole or in part. 
        You may not use the Software for any illegal purpose. We may cease providing you service and we may 
        terminate your right to use the Software at any time. Your rights to use the Software will automatically 
        terminate without notice from us if you fail to comply with any of the Terms and Conditions listed here 
        or across the Karobar Web Portal. Additional third party terms contained within the Platform or distributed 
        as such that are specifically identified in related documentation may apply and will govern the use of such 
        software in the event of a conflict with these Terms and Conditions. All software used in any of our 
        services is our property and/or our affiliates or its software suppliers and protected by the laws of 
        Pakistan including but not limited to any other applicable copyright laws.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        When you use the Platform, you may also be using the services of one or more third parties, 
        such as a wireless carrier or a mobile platform provider. Your use of these third party services 
        may be subject to separate policies, terms of use, and fees of these third parties.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You may not, and you will not encourage, assist or authorize any other person to copy, modify, 
          reverse engineer, decompile or disassemble, or otherwise tamper with our software whether in whole 
          or in part, or create any derivative works from or of the Software.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        In order to keep the Software up-to-date, we may offer automatic or manual updates at any time and without notice to you.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
        3. Conditions of sale (between sellers and customers)
        Please read these conditions carefully before placing an order for any products with the Sellers 
        (“We” or “Our” or “Us”, wherever applicable) on the Platform. These conditions signify your agreement 
        to be bound by these conditions.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            A. Contractual relationship
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Your order is a legal offer to the seller to buy the product or service displayed on our Platform. 
          When you place an order to purchase a product, any confirmations or status updates received prior to 
          the dispatch of your order serves purely to validate the order details provided and in no way implies 
          the confirmation of the order itself. The acceptance of your order is considered confirmed when the 
          product is dispatched to you. If your order is dispatched in more than one package, you may receive 
          separate dispatch confirmations. Upon time of placing the order, we indicate an approximate timeline 
          that the processing of your order will take however we cannot guarantee this timeline to be rigorously 
          precise in every instance as we are dependent on third party service providers to preserve this 
          commitment. We commit to you to make every reasonable effort to ensure that the indicative timeline 
          is met. All commercial/contractual terms are offered by and agreed to between you and the sellers alone.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          The commercial/contractual terms include without limitation price, shipping costs, payment methods, 
          payment terms, date, period and mode of delivery, warranties related to products and services and 
          after sales services related to products and services. Karobar does not have any control or does not 
          determine or advise or in any way involve itself in the offering or acceptance of such 
          commercial/contractual terms between the you and the Sellers. The seller retains the right to cancel 
          any order at its sole discretion prior to dispatch. We will ensure that there is timely intimation 
          to you of such cancellation via an email or sms. Any prepayments made in case of such cancellation(s), 
          shall be refunded to you within the time frames stipulated here.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You confirm that the product(s) or service(s) ordered by you are purchased either for your internal / 
          personal consumption or for commercial re-sale. You authorize us to declare and provide declaration to 
          any governmental authority on your behalf stating the aforesaid purpose for your orders on the Karobar 
          Web Portal. The Seller or the Karobar Web Portal may cancel an order wherein the quantities exceed the 
          typical individual consumption. This applies both to the number of products ordered within a single 
          order and the placing of several orders for the same product where the individual orders comprise a 
          quantity that exceeds the typical individual consumption. What comprises a typical individual's 
          consumption quantity limit shall be based on various factors and at the sole discretion of the Seller 
          or ours and may vary from individual to individual.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Please note that we sell products only in quantities which correspond to the typical needs of an 
          average household. This applies both to the number of products ordered within a single order and 
          the placing of several orders for the same product where the individual orders comprise a quantity 
          typical for a normal household.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            B. Returns
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          Please review our Returns Policy for details.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            C. Pricing, availability and order processing
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          All prices are listed in Rupees and are listed on the Platform by the seller that is selling the 
          product or service and it is the sole and exclusive responsibility of the seller to list the price 
          in accordance with the applicable laws. Items in your Order List will always reflect the most recent 
          price displayed on the item's product detail page. Please note that this price may differ from the 
          price shown for the item when you first placed it in your Order. Placing an item in your Order does 
          not reserve the price shown at that time. It is also possible that an item's price may decrease 
          between the time you place it in your basket and the time you purchase it.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We do not offer price matching for any items sold by any seller on our Platform or other websites.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We are determined to provide the most accurate pricing information on the Platform to our users; 
          however, errors may still occur, such as cases when the price of an item is not displayed correctly 
          on the Platform. As such, we reserve the right to refuse or cancel any order. In the event that an 
          item is mis priced, we may, at our own discretion, either contact you for instructions or cancel 
          your order and notify you of such cancellation. We shall have the right to refuse or cancel any 
          such orders whether or not the order has been confirmed and your prepayment processed. If such a 
          cancellation occurs on your prepaid order, our policies for refund will apply.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We list availability information for products listed on the Platform Portal, including on each product 
          information page. Beyond what we say on that page or otherwise on the Platform, we cannot be more 
          specific about availability. Please note that dispatch estimates are just that. They are not 
          guaranteed dispatch times and should not be relied upon as such. As we process your order, you will 
          be informed by e-mail or sms if any products you order turn out to be unavailable.
          Please note that there are cases when an order cannot be processed for various reasons. 
          Karobar reserves the right to refuse or cancel any order for any reason at any given time. You may be 
          asked to provide additional verifications or information, including but not limited to phone number and 
          address, before we accept the order.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          In order to avoid any fraud with credit or debit cards, we reserve the right to obtain validation of 
          your payment details before providing you with the product and to verify the personal information you 
          shared with us. This verification can take the shape of an identity, place of residence, or banking 
          information check. The absence of an answer following such an inquiry will automatically cause the 
          cancellation of the order within a reasonable timeline. We reserve the right to proceed to direct 
          cancellation of an order for which we suspect a risk of fraudulent use of banking instruments or 
          other reasons without prior notice or any subsequent legal liability.
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We Offer returns, refunds and replacements if the product is found to be faulty or not as shown 
          initially. There should be enough reason to prove that. In case, it is proven, we offer free returns, 
          replacements and refunds.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            D. Taxes
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You shall be responsible for payment of all fees/costs/charges associated with the purchase of 
          products from the Platform and you agree to bear any and all applicable taxes and provide any and 
          all information as per prevailing law.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            E. Communicating with us
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          When you visit the Karobar Web Portal, or send e-mails to us, you are communicating with us 
          electronically. You will be required to provide a valid phone number while placing an order with us. 
          We may communicate with you by e-mail, SMS, phone call or by posting notices on the website or by any 
          other mode of communication we choose to employ. For contractual purposes, you consent to receive 
          communications (including transactional, promotional and/or commercial messages), from us with respect 
          to your use of the website (and/or placement of your order) and agree to treat all modes of 
          communication with the same importance.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            F. Losses
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We will not be responsible for any business or personal losses (including but not limited to loss of 
          profits, revenue, contracts, anticipated savings, data, goodwill, or wasted expenditure) or any other 
          indirect or consequential loss that is not reasonably foreseeable to both you and us when you 
          commenced using the Platform.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            G. Amendments to conditions or alterations of service and related promise
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We reserve the right to make changes to the Platform, its policies, these terms and conditions and 
          any other publicly displayed condition or service promise at any time. You will be subject to the 
          policies and terms and conditions in force at the time you used the website unless any change to 
          those policies or these conditions is required to be made by law or government authority (in which 
          case it will apply to orders previously placed by you). If any of these conditions is deemed invalid, 
          void, or for any reason unenforceable, that condition will be deemed severable and will not affect the 
          validity and enforceability of any remaining condition.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            H. Force Majeure
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          We will not be held responsible for any delay or failure to comply with our obligations under these 
          conditions if the delay or failure arises from any cause which is beyond our reasonable control. 
          This condition does not affect your statutory rights.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            I. Waiver
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          You acknowledge and recognize that we are a private commercial enterprise and reserve the right to 
          conduct business to achieve our objectives in a manner we deem fit. You also acknowledge that if you 
          breach the conditions stated on our Platform and we take no action, we are still entitled to use our 
          rights and remedies in any other situation where you breach these conditions.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            J. Governing law and jurisdiction
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          if there is any dispute between you and Karobar, it will be resolved through arbitration instead of 
          going to court. The arbitration will be conducted according to the Arbitration Act, 1940, and a sole 
          arbitrator appointed by Karobar will make the final decision. If you choose to opt for arbitration, 
          you agree to share the costs of the arbitration proceedings equally with Karobar. The laws of The 
          Islamic Republic of Pakistan will govern these terms and conditions.
        </Typography>
        <Typography
          lineHeight="28px"
          variant="h3"
          sx={{ color: "custom.red", pt: 2, fontWeight: "600" }}>
            K. Representations and warranties
        </Typography>
        <Typography variant="body2" sx={{ py: 2 }}>
          It's important to note that as a platform, Karobar is not directly involved in the sale or purchase of 
          products or services, but rather provides a platform for sellers and buyers to transact. Therefore, 
          it's essential for users to exercise due diligence and caution when engaging in transactions on the 
          platform. In case of any disputes or issues, the parties involved are responsible for resolving them
          Karobar does not gain title to or have any rights or claims over the products or services offered by 
          a seller during a transaction on the platform. Therefore, Karobar does not have any obligations or 
          liabilities in respect of such contracts entered into between the buyer and seller. Karobar also 
          specifies that it is not responsible for unsatisfactory or delayed performance of services or damages 
          or delays as a result of products which are out of stock, unavailable or back ordered.
          If there is any discrepancy in the pricing or information displayed on the Platform due to technical 
          errors, typographical errors, or any other reason, the seller or the Platform may cancel your order 
          without prior notice or any liability. In such cases, any prepayments made for
        </Typography>
    </Container>
  );
};

export default TermsPage;
