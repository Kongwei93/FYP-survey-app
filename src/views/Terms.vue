<template>
  <section class="hero">
    <div class="hero-body">
      <div>
        <p class="title has-text-centered">
          <button
            class="button is-left"
            @click="$router.push({ name: 'register' })"
          >
            back</button
          >Terms & Conditions
        </p>
      </div>
      <div class="block">
        <p class="subtitle is-size-6">
          NUSmental.com ("we" or "NUSmental.com") is owned and operated by NUS.
          We provide and maintain an Internet Web site (the "Site") for the
          benefit of users of our services ("you" or "User"). On our Site we
          provide hosted tools and processes to allow you to create
          individualized surveys, obtain survey results, and use related
          services ("Services").
        </p>
        <p class="subtitle is-size-6">
          The Services and use of the Site are provided to you subject to the
          terms and conditions set forth in these Terms of Use ("Terms of Use"
          or "Agreement") and our Privacy Policy, and any other rules and
          policies set forth on this Site. The terms and conditions below and
          any other rules or policies set forth on this Site comprise the entire
          agreement between you and NUSmental.com and supersede all prior
          agreements between us.
        </p>
      </div>
      <div class="block">
        <p class="title is-size-5">1. ACKNOWLEDGMENT AND ACCEPTANCE.</p>
        <p class="subtitle is-size-6">
          PLEASE READ THE FOLLOWING TERMS OF THIS AGREEMENT CAREFULLY. BY
          COMPLETING THE REGISTRATION PROCESS, YOU ACCEPT AND AGREE TO ALL OF
          THE TERMS AND CONDITIONS SET FORTH IN THIS AGREEMENT AND IN OUR
          PRIVACY POLICY. YOU HEREBY ACKNOWLEDGE THAT YOU ARE 18 YEARS OF AGE OR
          OLDER.
        </p>
      </div>
      <div class="block">
        <p class="title is-size-5">2. USER RESPONSIBILITIES.</p>
        <p class="subtitle is-size-6">
          These Terms of Use give you important obligations. You agree to the
          following responsibilities:
          <li>
            Compliance with our Anti-Spam policy. Please see Section 7 below.
          </li>
          <li>Lawful use of the Services only. Please see Section 8 below.</li>
          <li>
            Creation and maintenance of all content in the account including but
            not limited to survey content, email content, address books and
            current billing and contact information.
          </li>
          <li>
            Email list and Address Book maintenance including opt-out contact
            information and immediate removal of opt-outs and bounces from email
            lists and the address book.
          </li>
          <li>Payment of all agreed subscription fees.</li>
          <li>
            Full responsibility for all activity associated with your use of our
            Site and Services.
          </li>
          <li>
            Compliance with all other obligations set forth in these Terms of
            Use.
          </li>
        </p>
      </div>
      <strong>
        We reserve the right to deactivate your account(s) as we deem
        appropriate or necessary, without notice. You enter and use the Site and
        the Services at your own risk. eSurveysPro.com is not responsible for
        your activities, surveys, content, results or questions from
        respondents, other data, or any other matter concerning your use of the
        Site or the Services. We recommend that you keep track of your survey
        results and other data in your own personal records, as we reserve the
        right to discontinue your account(s) or terminate the Services at any
        time. We are not responsible for the deletion of any data that is in or
        has been added to your account(s). If a User account remains inactive
        for a period of 18 months, we will deactivate the account.
      </strong>
    </div>
  </section>
</template>

<script>
export default {
  name: "Terms",
};
</script>
