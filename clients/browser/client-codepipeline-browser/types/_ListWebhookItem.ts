import {
  _WebhookDefinition,
  _UnmarshalledWebhookDefinition
} from "./_WebhookDefinition";
import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>The detail returned for each webhook after listing webhooks, such as the webhook URL, the webhook name, and the webhook ARN.</p>
 */
export interface _ListWebhookItem {
  /**
   * <p>The detail returned for each webhook, such as the webhook authentication type and filter rules.</p>
   */
  definition: _WebhookDefinition;

  /**
   * <p>A unique URL generated by CodePipeline. When a POST request is made to this URL, the defined pipeline is started as long as the body of the post request satisfies the defined authentication and filtering conditions. Deleting and re-creating a webhook will make the old URL invalid and generate a new URL.</p>
   */
  url: string;

  /**
   * <p>The text of the error message about the webhook.</p>
   */
  errorMessage?: string;

  /**
   * <p>The number code of the error.</p>
   */
  errorCode?: string;

  /**
   * <p>The date and time a webhook was last successfully triggered, in timestamp format.</p>
   */
  lastTriggered?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) of the webhook.</p>
   */
  arn?: string;

  /**
   * <p>Specifies the tags applied to the webhook.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledListWebhookItem extends _ListWebhookItem {
  /**
   * <p>The detail returned for each webhook, such as the webhook authentication type and filter rules.</p>
   */
  definition: _UnmarshalledWebhookDefinition;

  /**
   * <p>The date and time a webhook was last successfully triggered, in timestamp format.</p>
   */
  lastTriggered?: Date;

  /**
   * <p>Specifies the tags applied to the webhook.</p>
   */
  tags?: Array<_UnmarshalledTag>;
}