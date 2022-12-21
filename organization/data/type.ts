/**
 * Represents an organization with its contact information.
 */

interface Organization {
  /**
   * The name of the organization.
   */
  name: string;

  /**
   * The street address of the organization.
   */
  address: string;

  /**
   * The city where the organization is located.
   */
  city: string;

  /**
   * The province or state where the organization is located.
   */
  province: string;

  /**
   * The postal code of the organization's address.
   */
  postalCode: string;

  /**
   * The name of a reference person at the organization.
   */
  reference: string;

  /**
   * The email address of the organization.
   */
  email: string;

  /**
   * The phone number of the organization.
   */
  phone: string;

  /**
   * The fax number of the organization.
   */
  fax: string;

  /**
   * The website of the organization.
   */
  website?: string;
}
